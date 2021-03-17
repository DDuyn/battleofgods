import { ApiProperty } from '@nestjs/swagger';
import RelationsDto from 'src/Application/shared/Dto/Relations.dto';

export default class MatchDto extends RelationsDto {
  @ApiProperty()
  readonly matchId: number;
  @ApiProperty()
  readonly idFirstBattler: number;
  @ApiProperty()
  readonly firstBattler: string;
  @ApiProperty()
  readonly firstBattlerPhoto: string;
  @ApiProperty()
  readonly idSecondBattler: number;
  @ApiProperty()
  readonly secondBattler: string;
  @ApiProperty()
  readonly secondBattlerPhoto: string;
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
