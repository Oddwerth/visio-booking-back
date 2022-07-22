import { Strategy } from 'passport-local'
import { PassportStrategy } from '@nestjs/passport'
import { Injectable, UnauthorizedException } from '@nestjs/common'
import { AuthService } from '../auth.service'

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super()
  }

  /**
   * @description Vérification de la validité des informations pour le login
   * @return Si non valide alors return error => UnauthorizedException
   * @param username && password
   */
  async validate(username: string, password: string): Promise<any> {
    const influencer = await this.authService.validateInfluencer(username, password)

    if (!influencer) {
      throw new UnauthorizedException()
    }
    return influencer
  }
}
