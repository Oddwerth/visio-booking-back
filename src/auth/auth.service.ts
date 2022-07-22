import { Injectable } from '@nestjs/common';
import {InfluencerService} from "../influencer/influencer.service";
import {JwtService} from "@nestjs/jwt";

@Injectable()
export class AuthService {
  constructor(private readonly influencerService: InfluencerService, private jwtService: JwtService) {}

  async validateInfluencer(userName: string, password: string): Promise<any> {
    const influencer = await this.influencerService.findOneInfluencerByUserName(userName);
    if (influencer && influencer.password === password) {
      const { password, ...result } = influencer;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { contactMail: user._doc.contactMail, sub: user._doc._id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
