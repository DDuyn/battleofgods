import { ApiProperty } from '@nestjs/swagger';
import GodRelationDto from './GodRelation.dto';
export default class GodDto extends GodRelationDto {
  @ApiProperty()
  readonly godId: number;
  @ApiProperty()
  readonly name: string;
  @ApiProperty()
  readonly region: string;
  @ApiProperty()
  readonly regionId: number;
  @ApiProperty()
  readonly history: string;
  @ApiProperty()
  readonly photo: string;
}
