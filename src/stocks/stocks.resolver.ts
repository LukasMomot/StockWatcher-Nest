import { Resolver, Query, Args, Parent, ResolveField } from '@nestjs/graphql';
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

    @ResolveField()
    async company(@Parent() stock: Stock) {
        const { symbol } = stock;

        return this.stockService.getCompanyInfo(symbol).toPromise();
    }

    @Query(returns => [Stock])
    async mostradedStocks() {
        const mostraded = ['FB', 'AAPL', 'MSFT'];
        return this.stockService.getStockPrices(mostraded).toPromise();
    }
}
