import { ApiProperty } from '@nestjs/swagger';
import GenericDto from 'src/Application/Generic/Dto/Generic.dto';
export default class CompetitionDto extends GenericDto {
  @ApiProperty()
  readonly competitionId: number;
  @ApiProperty()
  readonly description: string;
  @ApiProperty()
  readonly name: string;
  @ApiProperty()
  readonly totalCompetitors: number;
}
