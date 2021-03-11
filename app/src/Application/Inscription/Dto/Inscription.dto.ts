import { ApiProperty } from '@nestjs/swagger';
import GenericDto from 'src/Application/Generic/Dto/Generic.dto';
export default class InscriptionDto extends GenericDto {
  @ApiProperty()
  readonly godId: number;
  @ApiProperty()
  readonly godName: string;
  @ApiProperty()
  readonly competitionId: number;
  @ApiProperty()
  readonly competitionName: string;
  @ApiProperty()
  readonly seasonId: number;
}
