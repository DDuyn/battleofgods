import { ApiHideProperty, ApiProperty } from '@nestjs/swagger';
import CompetitionDto from 'src/Application/Competition/Dto/Competition.dto';
import GodDto from 'src/Application/God/Dto/God.dto';
import SeasonDto from 'src/Application/Season/Dto/Season.dto';

export default class InscriptionCreateDto {
  @ApiProperty()
  readonly godId: number;
  @ApiHideProperty()
  god?: GodDto;
  @ApiProperty()
  readonly competitionId: number;
  @ApiHideProperty()
  competition?: CompetitionDto;
  @ApiProperty()
  readonly seasonId: number;
  @ApiHideProperty()
  season?: SeasonDto;
}
