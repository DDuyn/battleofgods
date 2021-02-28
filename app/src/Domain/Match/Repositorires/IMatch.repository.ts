import { Match } from "../Model/Match";

export interface IMatchRepository {
    findAll(): Promise<Match[]>;
    createMatch(match: Match): Promise<Match>;
    //TODO: Obtener matchs de un God   
}