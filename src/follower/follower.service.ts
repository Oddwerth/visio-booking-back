import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {CreateFollowerDto} from "./dto/create-follower.dto";
import {UpdateFollowerDto} from "./dto/update-follower.dto";
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {IFollower} from "./interfaces/follower.interface";

@Injectable()
export class FollowerService {
  constructor(@InjectModel('Follower') private  followerModel:Model<IFollower>) { }

  async createFollower(createFollowerDto: CreateFollowerDto): Promise<IFollower> {
    // TODO Faire la vérification qu'il n'y a pas deja un user avec email et username identique
    const newFollower = await new this.followerModel(createFollowerDto);
    return newFollower.save();
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  async updateFollower(followerId: string, updateFollowerDto: UpdateFollowerDto): Promise<IFollower> {
    const existingFollower = await this.followerModel.findByIdAndUpdate(followerId, updateFollowerDto, { new: true });
    // TODO voir pourquoi il ne passe pas dedans
    if (!existingFollower) {
      throw new HttpException(`Influencer #${followerId} not found`, HttpStatus.NOT_FOUND);
    }
    return existingFollower;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
