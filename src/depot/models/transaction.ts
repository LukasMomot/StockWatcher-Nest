import { Prop } from "@nestjs/mongoose";

export class Transaction {
    @Prop()
    date: Date;

    @Prop()
    symbol: string;

    @Prop()
    amountOfStocks: number;

    @Prop()
    buyPrice: number;
}
