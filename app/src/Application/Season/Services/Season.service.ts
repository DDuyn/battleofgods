import { Inject, Injectable } from "@nestjs/common";
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
}