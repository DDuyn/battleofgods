import { ApiProperty } from '@nestjs/swagger';
import GenericDto from 'src/Application/Generic/Dto/Generic.dto';
export default class PositionDto extends GenericDto {
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
