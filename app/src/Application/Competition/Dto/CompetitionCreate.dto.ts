import { ApiHideProperty, ApiProperty } from "@nestjs/swagger";

export default class CompetitionCreateDto {
    @ApiHideProperty()
    competitionId: number;
    @ApiProperty()
    readonly description: string;
    @ApiProperty()
    readonly name: string;
}