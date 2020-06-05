import { Injectable, HttpService } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { map } from 'rxjs/operators';
import { StockQuote } from 'src/models/api/stockQuote';
import { Observable } from 'rxjs';
import { Company } from 'src/models/api/company';

@Injectable()
export class StocksService {
  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) { }

  private iexCloudBaseUrl = 'https://cloud.iexapis.com/v1';

  /**
   * Get stock price
   */
  public getStockPrice(symbol: string): Observable<StockQuote> {
    return this.httpService
      .get(`${this.iexCloudBaseUrl}/stock/${symbol}/quote`, {
        params: {
          token: this.configService.get('IEX_API_KEY')
        }
      })
      .pipe(map(respose => respose.data as StockQuote));
  }

  /**
   * Gets the stock price for given symbols
   * Executed as batch request
   */
  public getStockPrices(symbols: string[]): Observable<StockQuote[]> {
    return this.httpService
      .get(`${this.iexCloudBaseUrl}/stock/market/batch`, {
        params: {
          token: this.configService.get('IEX_API_KEY'),
          types: 'quote',
          symbols: symbols.join()
        }
      })
      .pipe(map(respose => Object.values<any>(respose.data).map(v => v.quote as StockQuote)));
  }

  public getCompanyInfo(symbol: string): Observable<Company> {
    return this.httpService
      .get(`${this.iexCloudBaseUrl}/stock/${symbol}/company`, {
        params: {
          token: this.configService.get('IEX_API_KEY')
        }
      })
      .pipe(map(respose => respose.data as Company));
  }
}
