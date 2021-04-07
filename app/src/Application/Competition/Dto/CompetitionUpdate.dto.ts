import { ApiProperty } from '@nestjs/swagger';

export default class CompetitionUpdateDto {
  @ApiProperty()
  readonly description: string;
  @ApiProperty()
  readonly name: string;
  @ApiProperty()
  readonly isPlayed: boolean;
}
