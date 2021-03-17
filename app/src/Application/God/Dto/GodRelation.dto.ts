import { ApiHideProperty } from '@nestjs/swagger';
import RegionDto from 'src/Application/Region/Dto/Region.dto';
import GenericDto from 'src/Application/shared/Dto/Generic.dto';

export default class GodRelationDto extends GenericDto {
  @ApiHideProperty()
  regionDto?: RegionDto;
}
