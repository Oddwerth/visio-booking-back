import { Module } from '@nestjs/common';
import { InfluencerService } from './influencer.service';
import { InfluencerController } from './influencer.controller';
import {FollowerController} from "./follower.controller";
import { MongooseModule } from '@nestjs/mongoose';
import {User, UserSchema} from "./schemas/user.schema";
import {FollowerService} from "./follower.service";

@Module({
  imports: [
    MongooseModule.forFeature([{name: 'User', schema: UserSchema}]),
  ],
  controllers: [InfluencerController, FollowerController],
  providers: [InfluencerService, FollowerService]
})
export class UserModule {}
