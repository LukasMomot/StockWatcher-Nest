import { Controller, Get, Param } from '@nestjs/common';
import { StockPrice } from 'src/models/stockprice';
import { StocksService } from './stocks.service';
import { ConfigService } from '@nestjs/config';

@Controller('stocks')
export class StocksController {
  constructor(
    private readonly stockService: StocksService,
    private readonly config: ConfigService,
  ) {}

  @Get(':symbol/price')
  public getStockPrice(@Param('symbol') symbol: string): StockPrice {
    return {
      name: 'Apple',
      symbol,
      change: 5,
      date: new Date(),
      price: 10,
    };
  }

  @Get('mosttraded')
  public getMostTradedStocks() {
    return this.config.get<string>('IEX_API_KEY');
  }
}
