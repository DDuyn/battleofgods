import RankingDto from '../../Dto/Ranking.dto';

export interface IRankingService {
  findAll(): Promise<RankingDto[]>;
  createRanking(): Promise<RankingDto[]>;
  updateRankingByGod(rankingGod: RankingDto[]): Promise<RankingDto[]>;
}
