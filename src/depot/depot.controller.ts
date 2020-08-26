import { DepotService } from './depot.service';
import { Controller, Post, Body, Param, Get, Res, HttpStatus } from '@nestjs/common';
import { DepotTrasactionDto } from './dtos/depotTrasactionDto';
import { Response } from 'express';

@Controller('depot')
export class DepotController {

    constructor(private depotService: DepotService) {
    }

    @Get(':userId')
    public async getDepot(@Res() res: Response, @Param('userId') userId: number) {
        const depot = await this.depotService.getDepot(userId);
        return depot ? res.json(depot) : res.status(HttpStatus.NOT_FOUND).send('Depot was not found');
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
