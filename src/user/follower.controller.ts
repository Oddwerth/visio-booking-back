import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { InfluencerService } from './influencer.service';
import { CreateInfluencerDto } from './dto/create-influencer.dto';
import {FollowerService} from "./follower.service";

@Controller('follower')
export class FollowerController {
  constructor(private readonly followerService: FollowerService) {}

  @Post()
  create(@Body() createUserDto: CreateInfluencerDto) {
    return this.followerService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.followerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.followerService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: any) {
    return this.followerService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.followerService.remove(+id);
  }
}
