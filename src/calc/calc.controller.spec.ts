import { Test, TestingModule } from '@nestjs/testing';
import { CalcController } from './calc.controller';

describe('CalcController', () => {
  let controller: CalcController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CalcController],
    }).compile();

    controller = module.get<CalcController>(CalcController);
  });

  // it('should be defined', () => {
  //   expect(controller).toBeDefined();
  // });
  // describe('calculate Add', ()=>{
  //   it('should return the sum of 2 numbers', ()=>{
  //     controller.calculate(4,5,"Add")
  //   })
  // })
});
