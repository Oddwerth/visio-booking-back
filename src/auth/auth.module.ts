import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import {InfluencerModule} from "../influencer/influencer.module";
import {PassportModule} from "@nestjs/passport";
import {LocalStrategy} from "./strategies/local.strategy";
import { AuthController } from './auth.controller';
import {JwtModule} from "@nestjs/jwt";
import { ConfigModule } from '@nestjs/config';
import {SessionSerializer} from "./serializer/session.serializer";

@Module({
  imports: [
    ConfigModule.forRoot(),
    InfluencerModule,
    PassportModule.register({ session: true }),
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '600s'},
    })
  ],
  providers: [AuthService ,LocalStrategy, SessionSerializer],
  exports: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
