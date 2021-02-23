import { ApiProperty } from '@nestjs/swagger';
export default class RankingDto {
  @ApiProperty()
  readonly godName: string;
  @ApiProperty()
  readonly godId: number;
  @ApiProperty()
  points: number;
  @ApiProperty()
  wins: number;
}
