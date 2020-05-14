import { Module, HttpModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StocksController } from './stocks/stocks.controller';
import { ConfigModule } from '@nestjs/config';
import { StocksService } from './stocks/stocks.service';

@Module({
  imports: [HttpModule, ConfigModule.forRoot()],
  controllers: [AppController, StocksController],
  providers: [AppService, StocksService],
})
export class AppModule {}
