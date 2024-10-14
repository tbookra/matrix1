import { Injectable } from '@nestjs/common';
import { Operations } from 'src/types/calctypes';

type OperationArgs = {
  num1: number;
  num2: number;
  operation: Operations;
};
@Injectable()
export class CalcService {
  calculateIt({ num1, num2, operation }: OperationArgs) {
    switch (operation) {
      case 'Add':
        return num1 + num2;
      case 'Deduct':
        return num1 - num2;
      case 'Multiply':
        return num1 * num2;
      case 'Divide':
        return num1 / num2;
      default:
        return NaN;
    }
  }
}
