import { ApiHideProperty, ApiProperty } from '@nestjs/swagger';

export default class InscriptionCreateDto {
  @ApiHideProperty()
  inscriptionId: number;
  @ApiProperty()
  readonly godId: number;
  @ApiProperty()
  readonly competitionId: number;
  @ApiProperty()
  readonly seasonId: number;
}
