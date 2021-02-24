import { ApiProperty } from '@nestjs/swagger';
export default class RoundDto {
  @ApiProperty()
  readonly description: string;
  @ApiProperty()
  readonly roundId: number;
}
