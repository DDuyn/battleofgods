import { ApiProperty, ApiHideProperty } from '@nestjs/swagger';
export default class SeasonCreateDto {
  @ApiHideProperty()
  season: number;
  @ApiProperty()
  readonly competitionPlayed: number;
  @ApiProperty()
  readonly totalCompetition: number;
  @ApiProperty()
  readonly isFinished: boolean;
}
