import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  async login(user: any) {
    const payload = {
      sub: user.userId,
      username: user.username,
      authorized: user.authorized,
    };

    // Sign the payload to generate the JWT token
    return {
      access_token: this.jwtService.sign(payload, {
        expiresIn: '7d', // 7 days expiration
      }),
    };
  }
  decodeToken(token: string) {

    try {
      const decoded = this.jwtService.decode(token);
      return decoded;
    } catch (error) {
      // Handle error (e.g., token expired or invalid)
      return 'Invalid or expired token';
    }
  }
}
