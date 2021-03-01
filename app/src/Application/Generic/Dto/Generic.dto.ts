import { ApiHideProperty } from '@nestjs/swagger';
export default class GenericDto {
  @ApiHideProperty()
  _id?: string;
}
