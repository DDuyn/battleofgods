import { ApiProperty } from '@nestjs/swagger';
export default class RankingDto {
  @ApiProperty()
  readonly god: string;
  @ApiProperty()
  readonly points: number;
  @ApiProperty()
  readonly wins: number;
}
