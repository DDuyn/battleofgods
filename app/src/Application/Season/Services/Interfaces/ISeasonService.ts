import SeasonDto from "../../Dto/Season.dto";

export interface ISeasonService {
    findAll(): Promise<SeasonDto[]>;
    findBySeason(season: number): Promise<SeasonDto>;
}