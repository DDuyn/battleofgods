import { ApiProperty } from '@nestjs/swagger';

export default class CompetitionDto {
  @ApiProperty()
  readonly _id?: string;
  @ApiProperty()
  readonly idCompetition: number;
  @ApiProperty()
  readonly description: string;
}
