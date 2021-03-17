import { ApiProperty } from '@nestjs/swagger';
import GenericDto from 'src/Application/shared/Dto/Generic.dto';

export default class RegionDto extends GenericDto {
  @ApiProperty()
  readonly regionId: number;
  @ApiProperty()
  readonly description: string;
}
