import { Controller, Get, HttpService, Param } from '@nestjs/common';
import { StockPrice } from 'src/models/stockprice';

@Controller('stocks')
export class StocksController {
  constructor(private readonly httpService: HttpService) {}

  @Get(':symbol/price')
  public getStockPrice(@Param('symbol') symbol: string): StockPrice {
    return {
      name: 'BMW',
      symbol,
      change: 2,
      date: new Date(),
      price: 22,
    };
  }

  @Get('mosttraded')
  public getMostTradedStocks() {
    return 'mosttraded';
  }
}
