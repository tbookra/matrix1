import { Test, TestingModule } from '@nestjs/testing';
import { CalcService } from './calc.service';

describe('CalcService', () => {
  let service: CalcService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CalcService],
    }).compile();

    service = module.get<CalcService>(CalcService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  describe('calculate Add', () => {
    it('should return the sum of 2 numbers provided', () => {
      const result = service.calculateIt({
        num1: 4,
        num2: 5,
        operation: 'Add',
      });
      expect(result).toStrictEqual(9);
    });
  });
});
