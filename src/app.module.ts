import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StocksModule } from './stocks/stocks.module';
import { DepotModule } from './depot/depot.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [StocksModule, DepotModule, MongooseModule.forRoot('mongodb://localhost/digitalBroker', { user: 'sw', pass: 'swpass' })],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule { }
