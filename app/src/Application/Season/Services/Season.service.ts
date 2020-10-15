import { Inject, Injectable } from "@nestjs/common";
import { Season } from "src/Domain/Season/Model/Season";
import { ISeasonRepository } from "src/Domain/Season/Repositories/ISeason.repository";
import SeasonDto from "../Dto/Season.dto";
import { SeasonMapper } from "../Mappers/Season.mapper";
import { ISeasonService } from "./Interfaces/ISeasonService";

@Injectable()
export class SeasonService implements ISeasonService {
    constructor(
        @Inject('ISeasonRepository') private readonly seasonRepository: ISeasonRepository
    ) { }
    
    async findAll(): Promise<SeasonDto[]> {
        return SeasonMapper.fromEntityListToDto(await this.seasonRepository.findAll());
    }

    async findBySeason(season: number): Promise<SeasonDto> {
        return SeasonMapper.fromEntityToDto(await this.seasonRepository.findBySeason(season));
    }

    async createNewSeason(): Promise<SeasonDto> {
        const lastSeason: Season = await this.seasonRepository.findLastSeason();
        let season = 2020;
        if (!!lastSeason) ++season;
        const newSeason: Season = {
            season: season,
            competitionPlayed: 0,
            totalCompetition: 12,
            isFinished: false
        };
        return SeasonMapper.fromEntityToDto(await this.seasonRepository.createNewSeason(newSeason));
    }

    async updateSeason(seasonId: number): Promise<SeasonDto> {
        const season: Season = await this.seasonRepository.findBySeason(seasonId);
        const seasonUpdate: Season = {
            season: season.season,
            totalCompetition: season.totalCompetition,
            competitionPlayed: season.competitionPlayed + 1,
            isFinished: this.isFinishedSeason(season.competitionPlayed + 1, season.totalCompetition)
        };
        return SeasonMapper.fromEntityToDto(await this.seasonRepository.updateSeason(seasonUpdate));
    }

    private isFinishedSeason(competitionPlayed: number, totalCompetition: number): boolean {
        return competitionPlayed === totalCompetition;
    }
}