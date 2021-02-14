import { ApiHideProperty, ApiProperty } from "@nestjs/swagger";

export default class CompetitionCreateDto {
    @ApiHideProperty()
    idCompetition: number;
    @ApiProperty()
    readonly description: string;
}