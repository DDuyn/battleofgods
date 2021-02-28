import { ApiHideProperty, ApiProperty } from '@nestjs/swagger';

export default class CompetitionDto {
  @ApiProperty()
  readonly competitionId: number;
  @ApiProperty()
  readonly description: string;
  @ApiProperty()
  readonly name: string;
  @ApiProperty()
  readonly totalCompetitors: number;
  @ApiHideProperty()
  _id?: string;
}
