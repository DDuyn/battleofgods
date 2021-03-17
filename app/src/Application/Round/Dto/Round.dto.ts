import { ApiProperty } from '@nestjs/swagger';
import GenericDto from 'src/Application/shared/Dto/Generic.dto';

export default class RoundDto extends GenericDto {
  @ApiProperty()
  readonly description: string;
  @ApiProperty()
  readonly roundId: number;
}
