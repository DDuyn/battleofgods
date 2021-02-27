import { ApiProperty, ApiHideProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export default class GodCreateDto {
  @ApiHideProperty()
  godId: number;
  @ApiProperty()
  @IsString()
  readonly name: string;
  @ApiProperty()
  @IsString()
  readonly origen: string;
  @ApiProperty()
  @IsString()
  readonly history: string;
  @ApiProperty()
  readonly photo: string;
}
