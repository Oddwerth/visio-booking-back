import { Module } from '@nestjs/common';
import {FollowerController} from "./follower.controller";
import { MongooseModule } from '@nestjs/mongoose';
import {FollowerService} from "./follower.service";
import {FollowerSchema} from "./schemas/follower.schema";
import {GenericModule} from "../generic/generic.module";

@Module({
  imports: [
    MongooseModule.forFeature([{name: 'Follower', schema: FollowerSchema}]),
    GenericModule
  ],
  controllers: [FollowerController],
  providers: [FollowerService]
})
export class FollowerModule {}
