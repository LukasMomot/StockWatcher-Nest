import { Injectable, HttpService } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { map } from 'rxjs/operators';
import { StockQuote } from 'src/models/api/stockQuote';
import { Observable } from 'rxjs';

@Injectable()
export class StocksService {
  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {}

  private iexCloudBaseUrl = 'https://cloud.iexapis.com/v1';

  /**
   * Get stock price
   */
  public getStockPrice(symbol: string): Observable<StockQuote> {
    return this.httpService
      .get(
        `${
          this.iexCloudBaseUrl
        }/stock/${symbol}/quote?token=${this.configService.get('IEX_API_KEY')}`,
      )
      .pipe(map(respose => respose.data as StockQuote));
  }
}
