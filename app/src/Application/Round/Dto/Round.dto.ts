import { ApiProperty } from '@nestjs/swagger';
import GenericDto from 'src/Application/Generic/Dto/Generic.dto';
export default class RoundDto extends GenericDto{
  @ApiProperty()
  readonly description: string;
  @ApiProperty()
  readonly roundId: number;
}
