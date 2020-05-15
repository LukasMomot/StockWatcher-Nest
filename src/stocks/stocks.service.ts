import { Injectable, HttpService } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { map } from 'rxjs/operators';

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
  public getStockPrice(symbol: string) {
    return this.httpService
      .get(
        `${
          this.iexCloudBaseUrl
        }/stock/${symbol}/quote?token=${this.configService.get('IEX_API_KEY')}`,
      )
      .pipe(map(respose => respose.data));
  }
}
