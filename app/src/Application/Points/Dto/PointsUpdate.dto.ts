import { ApiProperty } from '@nestjs/swagger';
export default class PointsUpdateDto {
  @ApiProperty()
  readonly points: number;
}
