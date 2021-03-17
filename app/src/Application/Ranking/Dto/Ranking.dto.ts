import { ApiProperty } from '@nestjs/swagger';
import RelationsDto from 'src/Application/shared/Dto/Relations.dto';
export default class RankingDto extends RelationsDto {
  @ApiProperty()
  readonly godName: string;
  @ApiProperty()
  readonly godId: number;
  @ApiProperty()
  points: number;
  @ApiProperty()
  wins: number;
}
