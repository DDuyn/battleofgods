import { ApiProperty } from '@nestjs/swagger';
import GenericDto from 'src/Application/Generic/Dto/Generic.dto';
export default class SeasonDto extends GenericDto {
  @ApiProperty()
  readonly season: number;
  @ApiProperty()
  readonly competitionPlayed: number;
  @ApiProperty()
  readonly totalCompetition: number;
  @ApiProperty()
  readonly isFinished: boolean;
}
