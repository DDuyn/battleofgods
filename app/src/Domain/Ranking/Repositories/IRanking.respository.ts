import { Ranking } from '../Model/Ranking';

export interface IRankingRepository {
  findAll(): Promise<Ranking[]>;
  createRanking(listRanking: Ranking[]): Promise<Ranking[]>;
}
