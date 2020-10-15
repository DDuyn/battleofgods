import { Season } from "../Model/Season";

export interface ISeasonRepository {
    findAll(): Promise<Season[]>;
    findBySeason(season: number): Promise<Season>;
    findLastSeason(): Promise<Season>;
    createNewSeason(season: Season): Promise<Season>;
    updateSeason(season: Season): Promise<Season>;
}