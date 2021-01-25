import { ApiProperty } from '@nestjs/swagger';
import GodDto from 'src/Application/God/Dto/God.dto';

export default class RankingUpdateDto {
    @ApiProperty()
    readonly god: GodDto;
    @ApiProperty()
    readonly pointsEarned: number;
    @ApiProperty()
    readonly isWinner: boolean;
}