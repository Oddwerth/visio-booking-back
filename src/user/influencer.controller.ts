import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { InfluencerService } from './influencer.service';
import { CreateInfluencerDto } from './dto/create-influencer.dto';

@Controller('influencer')
export class InfluencerController {
  constructor(private readonly influencerService: InfluencerService) {}

  @Post()
  create(@Body() createUserDto: string) {
    console.log(createUserDto)
    return this.influencerService.create(createUserDto);
  }

  @Get()
  findAll() {
    return 'Hi bitch'
    // return this.influencerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.influencerService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: any) {
    return this.influencerService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.influencerService.remove(+id);
  }
}
