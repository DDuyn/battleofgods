import { ApiHideProperty, ApiProperty } from '@nestjs/swagger';
export default class GodDto {
  @ApiProperty()
  readonly godId: number;
  @ApiProperty()
  readonly name: string;
  @ApiProperty()
  readonly origen: string;
  @ApiProperty()
  readonly history: string;
  @ApiProperty()
  readonly photo: string;
  @ApiHideProperty()
  _id?: string;

}
