import { Controller, Post, Body } from '@nestjs/common';
import { BuySellStockDto } from './models/buySellStockDto';

@Controller('depot')
export class DepotController {

    @Post('buy')
    public async buyStock(@Body() buyStockDto: BuySellStockDto) {
        console.log('Buy DTO', buyStockDto);
        return true;
    }
}
