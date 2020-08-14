import { Transaction } from "./transaction";
import { DepotPosition } from "./depotPosition";
import { DepotPricingOption } from "./depotPricingOption";
import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose"

@Schema()
export class Depot extends Document {
    @Prop()
    userId: number;

    @Prop()
    totalBuyPrice: number = 0;

    @Prop()
    pricingOption: DepotPricingOption;

    @Prop([Array])
    transactions: Transaction[] = [];

    @Prop([Array])
    positions: DepotPosition[] = []
}

export const DepotSchema = SchemaFactory.createForClass(Depot);


