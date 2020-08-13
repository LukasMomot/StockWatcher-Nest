import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StocksModule } from './stocks/stocks.module';
import { DepotModule } from './depot/depot.module';

@Module({
  imports: [StocksModule, DepotModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule { }
