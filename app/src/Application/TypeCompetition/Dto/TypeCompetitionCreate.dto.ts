import { ApiHideProperty, ApiProperty } from '@nestjs/swagger';

export default class TypeCompetitionCreateDto {
  @ApiProperty()
  readonly name: string;
  @ApiProperty()
  readonly description: string;
  @ApiHideProperty()
  typeCompetitionId: number;
}
