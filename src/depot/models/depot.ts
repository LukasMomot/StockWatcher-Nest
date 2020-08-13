import { Transaction } from "./transaction";
import { DepotPosition } from "./depotPosition";
import { DepotPricingOption } from "./depotPricingOption";

export class Depot {
    userId: number;
    totalBuyPrice: number;
    pricingOption: DepotPricingOption;
    transactions: Transaction[];
    positions: DepotPosition[]
}


