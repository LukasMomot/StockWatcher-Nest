import { Module, HttpModule } from '@nestjs/common';
import { StocksController } from './stocks.controller';
import { StocksService } from './stocks.service';
import { ConfigModule } from '@nestjs/config';
import { StocksResolver } from './stocks.resolver';

@Module({
    imports: [HttpModule, ConfigModule.forRoot()],
    controllers: [StocksController],
    providers: [StocksService, StocksResolver]
})
export class StocksModule { }
