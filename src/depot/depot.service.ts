import { StocksService } from './../stocks/stocks.service';
import { Injectable } from '@nestjs/common';
import { DepotTrasactionDto } from './dtos/depotTrasactionDto';
import { InjectModel } from '@nestjs/mongoose';
import { Depot } from './models/depot';
import { Model } from 'mongoose';
import { DepotPricingOption } from './models/depotPricingOption';

@Injectable()
export class DepotService {

    constructor(private stocksService: StocksService,
        @InjectModel(Depot.name) private depotModel: Model<Depot>

    ) { }

    public async buyStock(transaction: DepotTrasactionDto) {
        const { symbol, amountOfStocks } = transaction;
        // TODO: Just for testing. Replace with real logic
        let result = await this.depotModel.create({
            pricingOption: DepotPricingOption.Free,
            totalBuyPrice: transaction.limitPrice,
            userId: 1,
            transactions: [{
                amountOfStocks,
                buyPrice: 200,
                date: new Date(),
                symbol
            }],
            positions: [{
                amountOfStocks,
                symbol,
                companyName: 'Apple INC',
                totalBuyPrice: 4957
            }]
        })

        return result;
    }

    public sellStock(transaction: DepotTrasactionDto) {
    }
}
