import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsOptional, IsPositive } from "class-validator";

export class DepotTrasactionDto {
    @ApiProperty()
    @IsNotEmpty()
    symbol: string;

    @ApiProperty()
    @IsPositive()
    amountOfStocks: number;

    @ApiProperty()
    @IsNumber()
    @IsOptional()
    limitPrice?: number;

    @ApiProperty()
    @IsNumber()
    userId: number;
}