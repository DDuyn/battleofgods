import { ApiProperty } from '@nestjs/swagger';
import GenericDto from 'src/Application/shared/Dto/Generic.dto';
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
