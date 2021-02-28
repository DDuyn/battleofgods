import { ApiProperty, ApiHideProperty } from '@nestjs/swagger';

export default class GodCreateDto {
  @ApiHideProperty()
  godId: number;
  @ApiProperty()
  readonly name: string;
  @ApiProperty()
  readonly origen: string;
  @ApiProperty()
  readonly history: string;
  @ApiProperty()
  readonly photo: string;
}
