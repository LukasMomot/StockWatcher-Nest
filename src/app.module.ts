import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StocksModule } from './stocks/stocks.module';
import { DepotModule } from './depot/depot.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [StocksModule, DepotModule,
    MongooseModule.forRoot(`mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASS}@cluster0.clvs6.mongodb.net/digitalBroker?retryWrites=true&w=majority`)],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule { }
