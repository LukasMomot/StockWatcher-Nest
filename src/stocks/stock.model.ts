import { ObjectType, Field, Float } from "@nestjs/graphql";

@ObjectType()
export class Stock {
    @Field()
    symbol: string;

    @Field(type => Float)
    latestPrice: number;

    @Field(type => Float)
    change: number;

    @Field()
    companyName: string;

    @Field()
    primaryExchange: string;
}
