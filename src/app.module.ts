import { Module } from '@nestjs/common';
import { ConfigModule } from "@nestjs/config";
import {MongooseModule} from "@nestjs/mongoose";
import { InfluencerModule } from './influencer/influencer.module';
import {FollowerModule} from "./follower/follower.module";


@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.DB_URL),
    InfluencerModule,
    FollowerModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
