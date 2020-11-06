import { ApiProperty } from '@nestjs/swagger';

export default class CompetitionDto {
  @ApiProperty()
  readonly idCompetition: number;
  @ApiProperty()
  readonly description: string;
}
