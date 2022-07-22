import {Controller, Request, Post, UseGuards, Get} from '@nestjs/common';
import { LocalAuthGuard } from './guards/local-auth-guard';
import {AuthGuard} from "@nestjs/passport";
import { JwtAuthGuard } from './guards/jwt-auth-guard';
import { AuthenticatedGuard } from './guards/authenticated-guard';

@Controller('auth')
export class AuthController {
  constructor() {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Request() req) {
    return { msg: 'Logged in! '}
  }

  @UseGuards(AuthenticatedGuard)
  @Get('protected')
  getHello(@Request() req) {
    return req.user;
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user._doc;
  }

}
