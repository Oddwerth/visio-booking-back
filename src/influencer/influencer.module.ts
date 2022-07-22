import { Module } from '@nestjs/common';
import { InfluencerService } from './influencer.service';
import { InfluencerController } from './influencer.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {Influencer, InfluencerSchema} from "./schemas/influencer.schema";
import {GenericModule} from "../generic/generic.module";

@Module({
  imports: [
    MongooseModule.forFeature([{name: 'Influencer', schema: InfluencerSchema}]),
    GenericModule
  ],
  controllers: [InfluencerController],
  providers: [InfluencerService],
  exports: [InfluencerService]
})
export class InfluencerModule {}
