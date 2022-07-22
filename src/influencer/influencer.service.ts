import {HttpException, HttpStatus, Injectable, NotFoundException} from '@nestjs/common';
import { CreateInfluencerDto } from './dto/create-influencer.dto';
import { UpdateInfluencerDto } from './dto/update-influencer.dto';
import {InjectModel} from "@nestjs/mongoose";
import {IInfluencer} from "./interfaces/influencer.interface";
import { Model } from 'mongoose';

@Injectable()
export class InfluencerService {
  constructor(@InjectModel('Influencer') private  influencerModel:Model<IInfluencer>) { }

  async createInfluencer(createInfluencerDto: CreateInfluencerDto): Promise<IInfluencer> {
    // TODO Faire la vérification qu'il n'y a pas deja un user avec email et username identique
    const newInfluencer = await new this.influencerModel(createInfluencerDto);
    return newInfluencer.save();
  }

  findAll() {
    return `This action returns all user`;
  }

  async findOneInfluencerById(influencerId: string): Promise<IInfluencer> {
    const existingInfluencer = await this.influencerModel.findById(influencerId).exec();

    if (!existingInfluencer) {
      throw new NotFoundException(`Influencer #${influencerId} not found`);
    }
    return existingInfluencer;
  }

  async findOneInfluencerByUserName(influencerUsername: string): Promise<IInfluencer> {
    const existingInfluencer = await this.influencerModel.findOne({ userName: influencerUsername }).exec();

    if (!existingInfluencer) {
      throw new NotFoundException(`Influencer ${influencerUsername} not found`);
    }
    return existingInfluencer;
  }

  async updateInfluencer(influencerId: string, updateInfluencerDto: UpdateInfluencerDto): Promise<IInfluencer> {
    const existingInfluencer = await this.influencerModel.findByIdAndUpdate(influencerId, updateInfluencerDto, { new: true });
    // TODO voir pourquoi il ne passe pas dedans
    if (!existingInfluencer) {
      throw new HttpException(`Influencer #${influencerId} not found`, HttpStatus.NOT_FOUND);
    }
    return existingInfluencer;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
