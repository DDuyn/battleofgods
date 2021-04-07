import { ApiHideProperty } from '@nestjs/swagger';
import CompetitionDto from 'src/Application/Competition/Dto/Competition.dto';
import GodDto from 'src/Application/God/Dto/God.dto';
import RegionDto from 'src/Application/Region/Dto/Region.dto';
import RoundDto from 'src/Application/Round/Dto/Round.dto';
import SeasonDto from 'src/Application/Season/Dto/Season.dto';
import GenericDto from 'src/Application/shared/Dto/Generic.dto';
import TypeCompetitionDto from 'src/Application/TypeCompetition/Dto/TypeCompetition.dto';

export default class RelationsDto extends GenericDto {
  @ApiHideProperty()
  regionDto?: RegionDto;
  @ApiHideProperty()
  competitionDto?: CompetitionDto;
  @ApiHideProperty()
  seasonDto?: SeasonDto;
  @ApiHideProperty()
  roundDto?: RoundDto;
  @ApiHideProperty()
  godDto?: GodDto;
  @ApiHideProperty()
  typeCompetitionDto?: TypeCompetitionDto;
}
