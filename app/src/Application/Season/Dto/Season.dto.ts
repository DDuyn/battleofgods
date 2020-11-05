import { ApiProperty } from '@nestjs/swagger';
export default class SeasonDto {
  @ApiProperty()
  readonly season: number;
  @ApiProperty()
  readonly competitionPlayed: number;
  @ApiProperty()
  readonly totalCompetition: number;
  @ApiProperty()
  readonly isFinished: boolean;
}
