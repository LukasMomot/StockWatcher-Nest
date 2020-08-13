import { Module } from '@nestjs/common';
import { DepotController } from './depot.controller';
import { DepotService } from './depot.service';
import { StocksModule } from 'src/stocks/stocks.module';

@Module({
  controllers: [DepotController],
  providers: [DepotService],
  imports: [StocksModule]
})
export class DepotModule { }
