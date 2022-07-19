import { Injectable } from '@nestjs/common';
import { CreateInfluencerDto } from './dto/create-influencer.dto';
import {InjectModel} from "@nestjs/mongoose";
import {IUser} from "./interfaces/user.interface";
import { Model } from 'mongoose';

@Injectable()
export class InfluencerService {
  constructor(@InjectModel('User') private  userModel:Model<IUser>) { }

  create(createUserDto: string) {
    return 'This action adds a new user';
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: any) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
