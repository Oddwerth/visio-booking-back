import { Module } from '@nestjs/common';
import { InfluencerService } from './influencer.service';
import { InfluencerController } from './influencer.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {Influencer, InfluencerSchema} from "./schemas/influencer.schema";

@Module({
  imports: [
    MongooseModule.forFeature([{name: 'Influencer', schema: InfluencerSchema}]),
  ],
  controllers: [InfluencerController],
  providers: [InfluencerService]
})
export class InfluencerModule {}
