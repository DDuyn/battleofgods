import { Season } from "../Model/Season";

export interface ISeasonRepository {
    findAll(): Promise<Season[]>;
    findBySeason(season: number): Promise<Season>;
}