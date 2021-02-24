import { ApiProperty, ApiHideProperty } from '@nestjs/swagger';
export default class RoundCreateDto {
  @ApiProperty()
  readonly description: string;
  @ApiHideProperty()
  roundId: number;
}
