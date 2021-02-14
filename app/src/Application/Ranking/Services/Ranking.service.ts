import { Inject, Injectable } from '@nestjs/common';
import { HttpStatus } from '@nestjs/common/enums';
import GodDto from 'src/Application/God/Dto/God.dto';
import { IGodService } from 'src/Application/God/Services/Interfaces/IGod.service';
import { Ranking } from 'src/Domain/Ranking/Model/Ranking';
import { IRankingRepository } from 'src/Domain/Ranking/Repositories/IRanking.repository';
import { CONSTANTS } from 'src/Utils/Constants/Constants';
import RankingDto from '../Dto/Ranking.dto';
import RankingUpdateDto from '../Dto/RankingUpdate.dto';
import { RankingMapper } from '../Mappers/Ranking.mapper';
import { IRankingService } from './Interfaces/IRanking.service';

@Injectable()
export class RankingService implements IRankingService {
  constructor(
    @Inject('IRankingRepository')
    private readonly rankingRepository: IRankingRepository,
    @Inject('IGodService')
    private readonly godService: IGodService,
  ) {}

  async findAll(): Promise<RankingDto[]> {  
    return RankingMapper.fromEntityListToDto(
      await this.rankingRepository.findAll(),
    );
  }

  async createRanking(): Promise<RankingDto[]> {
    const gods: GodDto[] = await this.godService.findAll();
    return RankingMapper.fromEntityListToDto(
      await this.rankingRepository.createRanking(
        this.createInitialRanking(gods),
      ),
    );
  }

  async updateRankingByGod(rankingGod: RankingUpdateDto[]): Promise<HttpStatus> {
    try {
      let rankingList: RankingDto[] = await this.findAll();
      rankingList = rankingList.map(godToUpdate => {     
        const updatedGod = rankingGod.filter(x =>x.god._id === godToUpdate.god._id.toString());          
          godToUpdate.wins += updatedGod[0].isWinner ? CONSTANTS.NUMBER_ONE : CONSTANTS.NUMBER_ZERO;
          godToUpdate.points += updatedGod[0].pointsEarned;
          return godToUpdate;
      });
  
      rankingList.forEach(async ranking => {
       await this.rankingRepository.updateRankingByGod(ranking);          
      });
      return HttpStatus.OK;
    } catch (error) {
      console.error('Error', error)
      return HttpStatus.NOT_FOUND;
    }


  }

  private createInitialRanking(gods: GodDto[]): Ranking[] {
    const rankingCreated: Ranking[] = [];
    gods.forEach(god => {
      rankingCreated.push({ god: god, points: 0, wins: 0 });
    });

    return rankingCreated;
  }
}
