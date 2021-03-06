import { ApiProperty } from '@nestjs/swagger';
import GenericDto from 'src/Application/Generic/Dto/Generic.dto';

export default class MatchDto extends GenericDto {
  @ApiProperty()
  readonly matchId: number;
  @ApiProperty()
  readonly idFirstBattler: number;
  @ApiProperty()
  readonly firstBattler: string;
  @ApiProperty()
  readonly idSecondBattler: number;
  @ApiProperty()
  readonly secondBattler: string;
  @ApiProperty()
  readonly idCompetition: number;
  @ApiProperty()
  readonly competition: string;
  @ApiProperty()
  readonly idRound: number;
  @ApiProperty()
  readonly round: string;
  @ApiProperty()
  readonly idSeason: number;
  @ApiProperty()
  readonly idWinner: number;
  @ApiProperty()
  readonly winner: string;
}
