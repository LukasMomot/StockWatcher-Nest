import { ApiProperty } from "@nestjs/swagger";

export class StockPrice {
  @ApiProperty()
  symbol: string;

  @ApiProperty()
  price: number;

  @ApiProperty()
  change: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  date: Date;
}
