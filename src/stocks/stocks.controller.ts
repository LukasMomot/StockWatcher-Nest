import { Controller, Get, Param } from '@nestjs/common';
import { StocksService } from './stocks.service';
import { map } from 'rxjs/operators';
import { mapToStockPrice } from 'src/models/mappers/stock-price.mapper';
import { StockPrice } from 'src/models/stockprice';
import { Company } from 'src/models/api/company';
import { ApiResponse, ApiOkResponse, ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('stocks')
@Controller('stocks')
export class StocksController {
  constructor(private readonly stockService: StocksService) { }

  @Get(':symbol/price')
  @ApiOkResponse({ status: 200, type: StockPrice })
  @ApiOperation({ operationId: 'getStockPrice' })
  public async getStockPrice(
    @Param('symbol') symbol: string,
  ): Promise<StockPrice> {
    const result = await this.stockService
      .getStockPrice(symbol)
      .pipe(map(mapToStockPrice))
      .toPromise();

    return result;
  }

  @Get('mosttraded')
  @ApiOkResponse({ status: 200, type: StockPrice, isArray: true })
  @ApiOperation({ operationId: 'getMostTradedStocks' })
  public getMostTradedStocks(): Promise<StockPrice[]> {
    // You can use stock from this list: https://www.investing.com/equities/most-active-stocks
    const mosttraded = ['AAPL', 'FB', 'TWTR', 'NFLX', 'SHOP'];

    return this.stockService
      .getStockPrices(mosttraded)
      .pipe(map(stocks => stocks.map(mapToStockPrice)))
      .toPromise();
  }

  @Get(':symbol/company')
  public async getCompanyInfo(
    @Param('symbol') symbol: string,
  ): Promise<Company> {
    const result = await this.stockService.getCompanyInfo(symbol).toPromise();

    return result;
  }
}
