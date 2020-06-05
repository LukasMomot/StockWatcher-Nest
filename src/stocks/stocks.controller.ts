import { Controller, Get, Param } from '@nestjs/common';
import { StocksService } from './stocks.service';
import { map } from 'rxjs/operators';
import { mapToStockPrice } from 'src/models/mappers/stock-price.mapper';
import { StockPrice } from 'src/models/stockprice';
import { Company } from 'src/models/api/company';

@Controller('stocks')
export class StocksController {
  constructor(private readonly stockService: StocksService) { }

  @Get(':symbol/price')
  public async getStockPrice(@Param('symbol') symbol: string): Promise<StockPrice> {
    const result = await this.stockService.getStockPrice(symbol)
      .pipe(map(mapToStockPrice)
      ).toPromise();

    return result;
  }

  @Get('mosttraded')
  public getMostTradedStocks(): Promise<StockPrice[]> {
    const mosttraded = ['AAPL', 'FB'];

    return this.stockService.getStockPrices(mosttraded)
      .pipe(map(stocks => stocks.map(mapToStockPrice))).toPromise();

  }

  @Get(':symbol/company')
  public async getCompanyInfo(@Param('symbol') symbol: string): Promise<Company> {
    const result = await this.stockService.getCompanyInfo(symbol).toPromise();

    return result;
  }
}
