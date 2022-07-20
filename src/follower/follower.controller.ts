import {Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus} from '@nestjs/common';
import { CreateInfluencerDto } from '../influencer/dto/create-influencer.dto';
import {FollowerService} from "./follower.service";
import {CreateFollowerDto} from "./dto/create-follower.dto";
import {UpdateFollowerDto} from "./dto/update-follower.dto";

@Controller('follower')
export class FollowerController {
  constructor(private readonly followerService: FollowerService) {}

  @Post()
  async createFollower(@Res() response, @Body() createFollowerDto: CreateFollowerDto) {
    try {
      const newFollower = await this.followerService.createFollower(createFollowerDto);

      return response.status(HttpStatus.CREATED).json({ message: 'Follower has been created successfully', newFollower });
    } catch (err) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 400,
        message: 'Error : Follower not created',
        error: 'Bad Request'
      });
    }
  }

  @Get()
  findAll() {
    return this.followerService.findAll();
  }

  @Get(':id')
  async findOneFollower(@Res() response, @Param('id') followerId: string) {
    try {
      const existingFollower = await this.followerService.findOneFollower(followerId);
      return response.status(HttpStatus.OK).json({
        message: 'Follower found successfully',
        existingFollower
      })
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }

  @Patch(':id')
  async update(@Res() response, @Param('id') followerId: string, @Body() updateFollowerDto: UpdateFollowerDto) {
    try {
      const existingInfluencer = await this.followerService.updateFollower(followerId, updateFollowerDto);

      return response.status(HttpStatus.OK).json({
        message: 'Follower has been successfully updated',
        existingInfluencer
      })
    }catch (err) {
      return response.status(err.status).json(err.message);
    }
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.followerService.remove(+id);
  }
}
