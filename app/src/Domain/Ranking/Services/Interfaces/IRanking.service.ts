import { Ranking } from '../../Model/Ranking';

export interface IRankingService {
  findAll(): Promise<Ranking[]>;
  createRanking(): Promise<Ranking[]>;
}
