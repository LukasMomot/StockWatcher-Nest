import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Company {
    @Field()
    symbol: string;

    @Field()
    companyName: string;

    @Field()
    exchange: string;

    @Field()
    industry: string;

    @Field()
    website: string;

    @Field()
    description: string;

    @Field()
    CEO: string;

    @Field()
    securityName: string;

    @Field()
    issueType: string;

    @Field()
    sector: string;

    @Field()
    primarySicCode: number;

    @Field()
    employees: number;

    @Field(type => [String])
    tags: string[];

    @Field()
    address: string;

    @Field()
    address2: string;

    @Field()
    state: string;

    @Field()
    city: string;

    @Field()
    zip: string;

    @Field()
    country: string;

    @Field()
    phone: string;
}
