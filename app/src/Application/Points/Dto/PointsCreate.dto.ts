import { ApiProperty } from '@nestjs/swagger';
import RelationsDto from 'src/Application/shared/Dto/Relations.dto';
export default class PointsCreateDto extends RelationsDto {
  @ApiProperty()
  readonly points: number;
  @ApiProperty()
  readonly typeCompetitionId: number;
  @ApiProperty()
  readonly roundId: number;
}
