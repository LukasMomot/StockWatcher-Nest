import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StockPriceController } from './stock-price/stock-price.controller';

@Module({
  imports: [],
  controllers: [AppController, StockPriceController],
  providers: [AppService],
})
export class AppModule {}
