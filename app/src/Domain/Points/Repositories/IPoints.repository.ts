import { Points } from '../Model/Points';

export interface IPointsRepository {
  findBySpecification(points: Points): Promise<Points[]>;
  findAll(): Promise<Points[]>;
  create(points: Points[]): Promise<Points[]>;
  update(points: Points): Promise<Points>;
}
