import {Controller, Request, Post, UseGuards, Get, Res} from '@nestjs/common';
import { LocalAuthGuard } from './guards/local-auth-guard';
import { JwtAuthGuard } from './guards/jwt-auth-guard';
import {AuthService} from "./auth.service";

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Res() response, @Request() req) {
    this.authService.login(req.user).then(res => {
      response.cookie('jwt', res.access_token, { httpOnly: true, secure: false, withCredentials: true }) // set to true for production
      return response.status(200).json({
        token: res.access_token,
      });
    })
  }

  @UseGuards(JwtAuthGuard)
  @Get('protected')
  getHello(@Request() req) {  // TODO : require an Bearer token, validate token
    return req.user;
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user._doc;
  }

}
