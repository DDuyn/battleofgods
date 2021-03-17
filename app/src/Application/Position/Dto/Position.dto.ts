import { ApiProperty } from '@nestjs/swagger';
import RelationsDto from 'src/Application/shared/Dto/Relations.dto';
export default class PositionDto extends RelationsDto {
  @ApiProperty()
  readonly godId: number;
  @ApiProperty()
  readonly godName: string;
  @ApiProperty()
  readonly competitionId: number;
  @ApiProperty()
  readonly competitionName: string;
  @ApiProperty()
  readonly seasonId: number;
  @ApiProperty()
  readonly roundId: number;
  @ApiProperty()
  readonly roundName: string;
  @ApiProperty()
  readonly points: number;
}
