import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false, // This ensures tokens are checked for expiration
      secretOrKey: '12345678', // Same secret key used for signing
    });
  }

  async validate(payload: any) {
    console.log('payload', payload);

    return {
      sub: payload.sub,
      username: payload.username,
      authorized: payload.authorized,
    };
  }
}
