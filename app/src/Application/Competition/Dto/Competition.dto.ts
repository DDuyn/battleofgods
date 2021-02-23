import { ApiProperty } from '@nestjs/swagger';

export default class CompetitionDto {
  @ApiProperty()
  readonly competitionId: number;
  @ApiProperty()
  readonly description: string;
}
