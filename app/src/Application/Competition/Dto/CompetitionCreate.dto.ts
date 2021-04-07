import { ApiHideProperty, ApiProperty } from '@nestjs/swagger';
import CompetitionRelationDto from './CompetitionRelation.dto';

export default class CompetitionCreateDto extends CompetitionRelationDto {
  @ApiHideProperty()
  competitionId: number;
  @ApiProperty()
  readonly description: string;
  @ApiProperty()
  readonly name: string;
  @ApiProperty()
  readonly typeCompetitionId: number;
  @ApiHideProperty()
  readonly isPlayed: boolean;
}
