import { ApiProperty } from '@nestjs/swagger';

export default class TypeCompetitionUpdateDto {
  @ApiProperty()
  readonly description: string;
}
