import { Controller, Get, Inject, Param } from "@nestjs/common";
import SeasonDto from "../Dto/Season.dto";
import { ISeasonService } from "../Services/Interfaces/ISeasonService";

@Controller('season')
export class SeasonController {
    constructor(
        @Inject('ISeasonService') private readonly seasonService: ISeasonService
    ) { }

    @Get('/')
    async getSeasons(): Promise<SeasonDto[]> {
        return await this.seasonService.findAll();
    }

    @Get('/:season')
    async getSeason(@Param() season: number): Promise<SeasonDto> {
        return await this.seasonService.findBySeason(season);
    }
}