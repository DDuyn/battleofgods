import { ApiProperty } from '@nestjs/swagger';
import GenericDto from 'src/Application/shared/Dto/Generic.dto';

export default class TypeCompetitionDto extends GenericDto {
  @ApiProperty()
  readonly typeCompetitionId: number;
  @ApiProperty()
  readonly name: string;
  @ApiProperty()
  readonly description: string;
}
