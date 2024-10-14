import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserDetailsDto } from './dtos/UserDetails.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post()
  sendToken(@Body() userDetails: UserDetailsDto) {
    return this.authService.login(userDetails);
  }
}
