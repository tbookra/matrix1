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

@Controller('calc')
export class CalcController {
  constructor(private readonly calcService: CalcService) {}
  @Post()
  @UsePipes(ValidationPipe)
  calculate(
    @Body() args: CalculateArgsDto,
    @Headers('operation') operation: Operations,
    @Res() res: Response,
  ) {
    const result = this.calcService.calculateIt({ ...args, operation });

    res.send({ result });
  }
}
