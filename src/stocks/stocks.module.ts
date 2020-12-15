import { Module, HttpModule } from '@nestjs/common';
import { StocksController } from './stocks.controller';
import { StocksService } from './stocks.service';
import { ConfigModule } from '@nestjs/config';

@Module({
    imports: [HttpModule, ConfigModule.forRoot()],
    controllers: [StocksController],
    providers: [StocksService],
    exports: [StocksService]
})
export class StocksModule { }
