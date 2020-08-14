import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { DepotController } from './depot.controller';
import { DepotService } from './depot.service';
import { StocksModule } from 'src/stocks/stocks.module';
import { Depot, DepotSchema } from './models/depot';

@Module({
  controllers: [DepotController],
  providers: [DepotService],
  imports: [StocksModule, MongooseModule.forFeature([{ name: Depot.name, schema: DepotSchema }])]
})
export class DepotModule { }
