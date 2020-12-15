import { Prop } from "@nestjs/mongoose";

export class DepotPosition {
    @Prop()
    symbol: string;

    @Prop()
    companyName: string;

    @Prop()
    amountOfStocks: number;

    @Prop()
    totalBuyPrice: number;
}
