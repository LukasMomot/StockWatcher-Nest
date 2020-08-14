import { Transaction } from "./transaction";
import { DepotPosition } from "./depotPosition";
import { DepotPricingOption } from "./depotPricingOption";
import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose"

@Schema()
export class Depot extends Document {
    constructor() {
        super();
    }

    @Prop()
    userId: number;

    @Prop()
    totalBuyPrice: number = 0;

    @Prop()
    pricingOption: DepotPricingOption;

    @Prop()
    transactions: Transaction[] = [];

    @Prop()
    positions: DepotPosition[] = []
}

export const DepotSchema = SchemaFactory.createForClass(Depot);


