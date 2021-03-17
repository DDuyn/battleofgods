import { ApiProperty } from '@nestjs/swagger';
import RelationsDto from 'src/Application/shared/Dto/Relations.dto';

export default class InscriptionCreateDto extends RelationsDto {
  @ApiProperty()
  readonly godId: number;
  @ApiProperty()
  readonly competitionId: number;
  @ApiProperty()
  readonly seasonId: number;
}
