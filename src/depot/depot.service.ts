import { StocksService } from './../stocks/stocks.service';
import { Injectable } from '@nestjs/common';
import { DepotTrasactionDto } from './dtos/depotTrasactionDto';

@Injectable()
export class DepotService {

    constructor(private stocksService: StocksService) {
    }

    public buyStock(transaction: DepotTrasactionDto) {
    }

    public sellStock(transaction: DepotTrasactionDto) {
    }
}
