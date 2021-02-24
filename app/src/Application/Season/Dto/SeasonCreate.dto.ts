import { ApiProperty, ApiHideProperty } from '@nestjs/swagger';
export default class SeasonCreateDto {
  @ApiHideProperty()
  season: number;
  @ApiHideProperty()
  readonly competitionPlayed: number;
  @ApiProperty()
  readonly totalCompetition: number;
  @ApiHideProperty()
  readonly isFinished: boolean;
}
