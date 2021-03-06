import { ApiProperty } from '@nestjs/swagger';

export default class PositionCreateDto {
  @ApiProperty()
  readonly godId: number;
  @ApiProperty()
  readonly competitionId: number;
  @ApiProperty()
  readonly seasonId: number;
  @ApiProperty()
  readonly roundId: number;
  @ApiProperty()
  readonly points: number;
}
