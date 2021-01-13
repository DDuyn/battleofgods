import { ApiProperty } from '@nestjs/swagger';

export default class GodDto {
  @ApiProperty()
  readonly _id?: string;
  @ApiProperty()
  readonly name: string;
  @ApiProperty()
  readonly origen: string;
  @ApiProperty()
  readonly history: string;
  @ApiProperty()
  readonly photo: string;
}
