import { ApiProperty } from '@nestjs/swagger';
import GenericDto from 'src/Application/Generic/Dto/Generic.dto';

export default class RegionDto extends GenericDto {
  @ApiProperty()
  readonly regionId: number;
  @ApiProperty()
  readonly description: string;
}
