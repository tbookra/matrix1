import {
  Body,
  Controller,
  Post,
  Res,
  Headers,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Response } from 'express';
import { CalcService } from './calc.service';
import { CalculateArgsDto } from './dtos/CalculateArgs.dto';
import { Operations } from 'src/types/calctypes';
import { AuthService } from 'src/auth/auth.service';

@Controller('calc')
export class CalcController {
  constructor(
    private readonly calcService: CalcService,
    private readonly authService: AuthService,
  ) {}
  @Post()
  @UsePipes(ValidationPipe)
  calculate(
    @Body() args: CalculateArgsDto,
    @Headers('operation') operation: Operations,
    @Headers('Authorization') bearer: string,
    @Res() res: Response,
  ) {
    const token = bearer.split(' ')[1];
    const userDetails = this.authService.decodeToken(token);
    if (userDetails?.authorized?.includes('admin')) {
      const result = this.calcService.calculateIt({ ...args, operation });
      res.send({ result, userDetails });
    } else {
      res.send('not authorized');
    }
  }
}
