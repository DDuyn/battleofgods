import { Position } from '../Model/Position';

export interface IPositionRepository {
    findAll(): Promise<Position[]>;
    createPosition(position: Position): Promise<Position>;
    findByGod(position: Position): Promise<Position[]>;
    findByGodAndSeason(position: Position): Promise<Position[]>;
}