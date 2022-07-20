import {Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus} from '@nestjs/common';
import { InfluencerService } from './influencer.service';
import { CreateInfluencerDto } from './dto/create-influencer.dto';
import {UpdateInfluencerDto} from "./dto/update-influencer.dto";

@Controller('influencer')
export class InfluencerController {
  constructor(private readonly influencerService: InfluencerService) {}

  @Post()
  async createInfluencer(@Res() response, @Body() createInfluencerDto: CreateInfluencerDto) {
    try {
      const newInfluencer = await this.influencerService.createInfluencer(createInfluencerDto);

      return response.status(HttpStatus.CREATED).json({ message: 'Influencer has been created successfully', newInfluencer });
    } catch (err) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 400,
        message: 'Error : Influencer not created',
        error: 'Bad Request'
      });
    }
  }

  @Get()
  findAll() {
    return this.influencerService.findAll();
  }

  @Get(':id')
  async findOne(@Res() response, @Param('id') influencerId: string) {
    try {
      const existingInfluencer = await this.influencerService.findOneInfluencer(influencerId);
      return response.status(HttpStatus.OK).json({
        message: 'Influencer found successfully',
        existingInfluencer
      })
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }

  @Patch(':id')
  async updateInfluencer(@Res() response, @Param('id') influencerId: string, @Body() updateInfluencerDto: UpdateInfluencerDto) {
    try {
      const existingInfluencer = await this.influencerService.updateInfluencer(influencerId, updateInfluencerDto);

      return response.status(HttpStatus.OK).json({
        message: 'Influencer has been successfully updated',
        existingInfluencer
      })
    }catch (err) {
      return response.status(err.status).json(err.message);
    }
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.influencerService.remove(+id);
  }
}
