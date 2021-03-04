import { Ranking } from '../Model/Ranking';

export interface IRankingRepository {
  findAll(): Promise<Ranking[]>;
  createRanking(listRanking: Ranking[]): Promise<Ranking[]>;
  updateRankingByGod(rankingGod: Ranking): Promise<Ranking>;
  findRankingByGod(ranking: Ranking): Promise<Ranking>;
}
