import { ApiHideProperty, ApiProperty } from '@nestjs/swagger';
import GodRelationDto from './GodRelation.dto';

export default class GodCreateDto extends GodRelationDto {
  @ApiHideProperty()
  godId: number;
  @ApiProperty()
  readonly name: string;
  @ApiProperty()
  readonly regionId: number;
  @ApiProperty()
  readonly history: string;
  @ApiProperty()
  readonly photo: string;
}
