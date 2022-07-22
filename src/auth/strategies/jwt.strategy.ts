// import { ExtractJwt, Strategy } from 'passport-jwt'
// import { PassportStrategy } from '@nestjs/passport'
// import { Injectable } from '@nestjs/common'
//
// @Injectable()
// export class JwtStrategy extends PassportStrategy(Strategy) {
//   constructor() {
//     // * Création des paramètres de la stratégie du JWT
//     super({
//       jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
//       ignoreExpiration: false,
//       secretOrKey: process.env.JWT_SECRET,
//     })
//   }
//
//   /**
//    * @description Vérification du lagin afin de créer le token JWT
//    */
//   async validate(payload: any) {
//     // * paylaod = decode JWT
//     // ? He go to local.strategy => validate() for find context and information of user
//     return { userId: payload._id, email: payload.email }
//   }
// }
