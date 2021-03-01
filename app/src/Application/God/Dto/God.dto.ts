import { ApiProperty } from '@nestjs/swagger';
import GenericDto from 'src/Application/Generic/Dto/Generic.dto';
export default class GodDto extends GenericDto{
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

}
