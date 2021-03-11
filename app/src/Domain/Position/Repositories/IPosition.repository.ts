import { Position } from '../Model/Position';

export interface IPositionRepository {
  findAll(): Promise<Position[]>;
  createPosition(position: Position): Promise<Position>;
  findBySpecification(position: Position): Promise<Position[]>;
}
