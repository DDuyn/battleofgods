import { ApiProperty } from '@nestjs/swagger';
import RelationsDto from 'src/Application/shared/Dto/Relations.dto';
export default class PointsDto extends RelationsDto {
  @ApiProperty()
  readonly points: number;
  @ApiProperty()
  readonly typeCompetitionId: number;
  @ApiProperty()
  readonly typeCompetitionName: string;
  @ApiProperty()
  readonly roundId: number;
  @ApiProperty()
  readonly roundName: string;
}
