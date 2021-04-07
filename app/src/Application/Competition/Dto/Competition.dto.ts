import { ApiProperty } from '@nestjs/swagger';
import CompetitionRelationDto from './CompetitionRelation.dto';

export default class CompetitionDto extends CompetitionRelationDto {
  @ApiProperty()
  readonly competitionId: number;
  @ApiProperty()
  readonly description: string;
  @ApiProperty()
  readonly name: string;
  @ApiProperty()
  readonly typeCompetition: string;
  @ApiProperty()
  readonly typeCompetitionId: number;
  @ApiProperty()
  readonly totalCompetitors: number;
}
