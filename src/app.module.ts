import { Module, HttpModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StocksController } from './stocks/stocks.controller';

@Module({
  imports: [HttpModule],
  controllers: [AppController, StocksController],
  providers: [AppService],
})
export class AppModule {}
