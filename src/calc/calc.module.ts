import { Module } from '@nestjs/common';
import { CalcController } from './calc.controller';
import { CalcService } from './calc.service';
import { AuthService } from 'src/auth/auth.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  controllers: [CalcController],
  providers: [CalcService, AuthService, JwtService],
})
export class CalcModule {}
