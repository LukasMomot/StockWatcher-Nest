import { Controller, Get, Param } from '@nestjs/common';
import { StocksService } from './stocks.service';
import { map } from 'rxjs/operators';
import { mapToStockPrice } from 'src/models/mappers/stock-price.mapper';
import { StockPrice } from 'src/models/stockprice';

@Controller('stocks')
export class StocksController {
  constructor(private readonly stockService: StocksService) { }

  @Get(':symbol/price')
  public async getStockPrice(@Param('symbol') symbol: string): Promise<StockPrice> {
    const result = await this.stockService.getStockPrice(symbol)
      .pipe(map(stock => mapToStockPrice(stock))
      ).toPromise();

    return result;
  }

  @Get('mosttraded')
  public getMostTradedStocks() {
    return 'mostTraded';
  }
}
