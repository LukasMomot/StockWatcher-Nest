import { Test, TestingModule } from '@nestjs/testing';
import { StockPriceController } from './stock-price.controller';

describe('StockPrice Controller', () => {
  let controller: StockPriceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StockPriceController],
    }).compile();

    controller = module.get<StockPriceController>(StockPriceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
