import { ApiProperty } from '@nestjs/swagger';
export default class RankingUpdateDto {
    @ApiProperty()
    readonly godId: number;
    @ApiProperty()
    readonly pointsEarned: number;
    @ApiProperty()
    readonly isWinner: boolean;
}