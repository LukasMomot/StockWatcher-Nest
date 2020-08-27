import { StocksService } from './../stocks/stocks.service';
import { Injectable } from '@nestjs/common';
import { DepotTrasactionDto } from './dtos/depotTrasactionDto';
import { InjectModel } from '@nestjs/mongoose';
import { Depot } from './models/depot';
import { Model } from 'mongoose';
import { DepotPricingOption } from './models/depotPricingOption';
import { calculatePercentageChange } from 'src/utils/calculation';
import { StockDto } from './dtos/stockDto';

@Injectable()
export class DepotService {

    constructor(private stocksService: StocksService,
        @InjectModel(Depot.name) private depotModel: Model<Depot>

    ) { }

    public async getStockFromDepot(userId: number) {
        const depot = await this.depotModel.findOne({ userId });
        const stocks: StockDto[] = [];

        for (let pos of depot.positions) {
            const currentPrice = (await this.stocksService.getStockPrice(pos.symbol).toPromise()).latestPrice;
            const currentValue = pos.amountOfStocks * currentPrice;
            const percentChange = calculatePercentageChange(currentValue, pos.totalBuyPrice);
            const profit = +(pos.totalBuyPrice - currentValue).toFixed(2);
            stocks.push({
                ...pos,
                currentValue,
                percentChange,
                profit
            })
        }

        return stocks;
    }

    public async buyStock(transaction: DepotTrasactionDto) {
        const { symbol, amountOfStocks, userId } = transaction;
        const { latestPrice, companyName } = await this.stocksService.getStockPrice(symbol).toPromise();

        if (transaction.limitPrice && latestPrice > transaction.limitPrice) {
            throw new Error('Buy failed. The latest price is higher than limit price');
        }

        let depot = await this.depotModel.findOne({ userId }).exec();

        // Create new depot
        if (!depot) {
            depot = new this.depotModel(<Depot>{
                userId,
                totalBuyPrice: 0,
                pricingOption: DepotPricingOption.Rockstar,
                transactions: [],
                positions: [],
            });
        }

        // Add transaction to depot
        depot.transactions.push({
            amountOfStocks,
            buyPrice: latestPrice,
            date: new Date(),
            symbol
        });

        const transactionBuyPrice = latestPrice * amountOfStocks;
        depot.totalBuyPrice += transactionBuyPrice

        let position = depot.positions.find(p => p.symbol == symbol);
        if (position) {
            position.totalBuyPrice += transactionBuyPrice;
            position.amountOfStocks += amountOfStocks;
        } else {
            position = {
                symbol,
                amountOfStocks,
                companyName,
                totalBuyPrice: transactionBuyPrice
            }
            depot.positions.push(position);
        }

        await this.depotModel.updateOne({ _id: depot.id }, depot, { upsert: true });

        return depot;
    }

    public sellStock(transaction: DepotTrasactionDto) {
    }
}
