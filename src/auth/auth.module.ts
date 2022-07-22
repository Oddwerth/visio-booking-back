import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import {InfluencerModule} from "../influencer/influencer.module";
import {PassportModule} from "@nestjs/passport";
import {LocalStrategy} from "./strategies/local.strategy";
import { AuthController } from './auth.controller';
import {JwtModule} from "@nestjs/jwt";
import { ConfigModule } from '@nestjs/config';
import {JwtStrategy} from "./strategies/jwt.strategy";

@Module({
  imports: [
    ConfigModule.forRoot(),
    InfluencerModule,
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '600s'},
    })
  ],
  providers: [AuthService ,LocalStrategy, JwtStrategy],
  exports: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
