import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { HttpStatus } from '@nestjs/common/enums';
import { Ranking } from 'src/Domain/Ranking/Model/Ranking';
import { IRankingRepository } from 'src/Domain/Ranking/Repositories/IRanking.repository';
import RankingDto from '../Dto/Ranking.dto';
import RankingUpdateDto from '../Dto/RankingUpdate.dto';
import { RankingMapper } from '../Mappers/Ranking.mapper';
import { RankingHelper } from './Helper/Ranking.helper';
import { IRankingService } from './Interfaces/IRanking.service';

@Injectable()
export class RankingService implements IRankingService {
  constructor(
    @Inject('IRankingRepository')
    private readonly rankingRepository: IRankingRepository,
    @Inject('RankingHelper')
    private readonly rankingHelper: RankingHelper
  ) {}

  async findRankingByGod(godId: number): Promise<RankingDto> {
    const ranking: Ranking = await this.rankingHelper.getRankingByGod(godId);
    const rankingGod: Ranking = await this.rankingRepository.findRankingByGod(ranking);
    if(this.rankingHelper.isNull(rankingGod)) throw new NotFoundException;
    return RankingMapper.fromEntityToDto(rankingGod);
  }

  async findAll(): Promise<RankingDto[]> {  
    const ranking: Ranking[] = await this.rankingRepository.findAll();
    return RankingMapper.fromEntityListToDto(ranking);
  }

  async createRanking(): Promise<RankingDto[]> {
    const rankingActualList: Ranking[] = await this.rankingRepository.findAll();
    const ranking: Ranking[] = await this.rankingHelper.createInitialRanking(rankingActualList);
    const rankingListCreated: Ranking[] = await this.rankingRepository.createRanking(ranking); 
    return RankingMapper.fromEntityListToDto(rankingListCreated);
  }

  async updateRankingByGod(rankingGod: RankingUpdateDto[]): Promise<HttpStatus> {
    try {    
      let rankingToUpdateList: Ranking[] = await this.rankingRepository.findAll();
      rankingToUpdateList = this.rankingHelper.getGodsToUpdate(rankingToUpdateList, rankingGod);
      rankingToUpdateList.forEach(async ranking => {
       if (!!ranking) await this.rankingRepository.updateRankingByGod(ranking);      
      });
      return HttpStatus.OK;
    } catch (error) {    
      return HttpStatus.NOT_FOUND;
    }
  }
}
