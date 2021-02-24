import SeasonDto from "../../Dto/Season.dto";
import SeasonCreateDto from "../../Dto/SeasonCreate.dto";

export interface ISeasonService {
    findAll(): Promise<SeasonDto[]>;
    findBySeason(season: number): Promise<SeasonDto>;
    createNewSeason(season: SeasonCreateDto): Promise<SeasonDto>;
    updateSeason(seasonId: number): Promise<SeasonDto>;
}