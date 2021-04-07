import { ApiHideProperty } from '@nestjs/swagger';
import GenericDto from 'src/Application/shared/Dto/Generic.dto';
import TypeCompetitionDto from 'src/Application/TypeCompetition/Dto/TypeCompetition.dto';

export default class CompetitionRelationDto extends GenericDto {
  @ApiHideProperty()
  typeCompetitionDto?: TypeCompetitionDto;
}
