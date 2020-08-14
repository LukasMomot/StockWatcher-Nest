import { DepotService } from './depot.service';
import { Controller, Post, Body } from '@nestjs/common';
import { DepotTrasactionDto } from './dtos/depotTrasactionDto';

@Controller('depot')
export class DepotController {

    constructor(private depotService: DepotService) {
    }

    @Post('buy')
    public async buyStock(@Body() buyStockDto: DepotTrasactionDto) {
        console.log('Buy Stock DTO ', buyStockDto);
        return await this.depotService.buyStock(buyStockDto);
    }

    @Post('sell')
    public async sellStock(@Body() sellStockDto: DepotTrasactionDto) {
        console.log('Sell Stock DTO', sellStockDto);
        return true;
    }
}
