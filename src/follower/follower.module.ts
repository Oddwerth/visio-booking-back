import { Module } from '@nestjs/common';
import {FollowerController} from "./follower.controller";
import { MongooseModule } from '@nestjs/mongoose';
import {FollowerService} from "./follower.service";
import {FollowerSchema} from "./schemas/follower.schema";

@Module({
  imports: [
    MongooseModule.forFeature([{name: 'Follower', schema: FollowerSchema}]),
  ],
  controllers: [FollowerController],
  providers: [FollowerService]
})
export class FollowerModule {}
