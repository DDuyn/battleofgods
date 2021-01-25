import { HttpStatus } from '@nestjs/common/enums';
import RankingDto from '../../Dto/Ranking.dto';
import RankingUpdateDto from '../../Dto/RankingUpdate.dto';

export interface IRankingService {
  findAll(): Promise<RankingDto[]>;
  createRanking(): Promise<RankingDto[]>;
  updateRankingByGod(rankingGod: RankingUpdateDto[]): Promise<HttpStatus>;
}
