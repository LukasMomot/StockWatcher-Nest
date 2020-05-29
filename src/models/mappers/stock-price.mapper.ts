import { StockQuote } from "../api/stockQuote";
import { StockPrice } from "../stockprice";

export function mapToStockPrice(quote: StockQuote) {
    return {
        change: quote.change,
        date: new Date(),
        name: quote.companyName,
        price: quote.latestPrice,
        symbol: quote.symbol
    } as StockPrice;
}