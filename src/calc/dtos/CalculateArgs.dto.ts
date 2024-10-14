import { IsNotEmpty, IsNumber } from "class-validator";

export class CalculateArgsDto {
  @IsNumber()
  @IsNotEmpty()
  num1: number;

  @IsNumber()
  @IsNotEmpty()
  num2: number;
}
