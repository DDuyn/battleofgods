import { ApiProperty, ApiHideProperty } from '@nestjs/swagger';

export default class MatchCreateDto {
    @ApiHideProperty()
    matchId: number;
    @ApiProperty()
    readonly idFirstBattler: number;    
    @ApiProperty()
    readonly idSecondBattler: number;    
    @ApiProperty()
    readonly idCompetition: number;
    @ApiProperty()
    readonly idRound: number;
    @ApiProperty()
    readonly idSeason: number;
    @ApiProperty()
    readonly idWinner: number;    
}