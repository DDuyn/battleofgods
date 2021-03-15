import { ApiHideProperty, ApiProperty } from '@nestjs/swagger';

export default class RegionCreateDto {
  @ApiHideProperty()
  regionId: number;
  @ApiProperty()
  readonly description: string;
}
