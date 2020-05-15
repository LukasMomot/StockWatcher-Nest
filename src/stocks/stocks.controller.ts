import { Controller, Get, Param } from '@nestjs/common';
import { StocksService } from './stocks.service';

@Controller('stocks')
export class StocksController {
  constructor(private readonly stockService: StocksService) {}

  @Get(':symbol/price')
  public async getStockPrice(@Param('symbol') symbol: string) {
    const result = await this.stockService.getStockPrice(symbol).toPromise();

    return result;
  }

  @Get('mosttraded')
  public getMostTradedStocks() {
    return 'mostTraded';
  }
}
