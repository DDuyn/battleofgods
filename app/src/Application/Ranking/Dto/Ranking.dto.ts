import { ApiProperty } from '@nestjs/swagger';
import GodDto from 'src/Application/God/Dto/God.dto';

export default class RankingDto {
  @ApiProperty()
  readonly god: GodDto;
  @ApiProperty()
  points: number;
  @ApiProperty()
  wins: number;
}
