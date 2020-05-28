import { Resolver, Query, Args } from '@nestjs/graphql';
import { Stock } from './stock.model';
import { StocksService } from './stocks.service';

@Resolver(of => Stock)
export class StocksResolver {

    constructor(
        private stockService: StocksService
    ) { }

    @Query(returns => Stock)
    async stock(@Args('symbol', { type: () => String }) symbol: string) {
        return this.stockService.getStockPrice(symbol).toPromise();
    }
}
