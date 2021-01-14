import { ApiProperty } from '@nestjs/swagger';
import GodDto from 'src/Application/God/Dto/God.dto';

export default class RankingDto {
  @ApiProperty()
  readonly god: GodDto;
  @ApiProperty()
  readonly points: number;
  @ApiProperty()
  readonly wins: number;
}
