import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { ICounterService } from 'src/Application/Counter/Services/Interfaces/ICounter.service';
import GodDto from 'src/Application/God/Dto/God.dto';
import { IGodService } from 'src/Application/God/Services/Interfaces/IGod.service';
import RankingUpdateDto from 'src/Application/Ranking/Dto/RankingUpdate.dto';
import { UtilsService } from 'src/Application/Shared/Services/Utils.service';
import { Ranking } from 'src/Domain/Ranking/Model/Ranking';
import { CONSTANTS } from 'src/Utils/Constants/Constants';

@Injectable()
export class RankingHelper extends UtilsService {
  constructor(
    @Inject('ICounterService') private readonly counterService: ICounterService,
    @Inject('IGodService') private readonly godService: IGodService,
  ) {
    super();
  }
  getNextSequenceValue(model: string): Promise<number> {
    return this.counterService.getNextSequenceValue(model);
  }

  async createInitialRanking(rankingActualList: Ranking[]): Promise<Ranking[]> {
    const gods: GodDto[] = await this.godService.findAll(CONSTANTS.SHOWID);
    const newsGods: GodDto[] = gods.filter(god => !rankingActualList.some(x => x.god.godId === god.godId));
    const rankingCreated: Ranking[] = [];
    if (this.isArrayNull(newsGods)) throw new NotFoundException();
    newsGods.forEach(god => {
      rankingCreated.push({ god: god, points: 0, wins: 0 });
    });
    return rankingCreated;
  }

  async getRankingByGod(godId: number): Promise<Ranking> {
    const godDto: GodDto = await this.godService.findByGodId(godId, CONSTANTS.SHOWID);
    if (this.isNull(godDto)) throw new NotFoundException();
    const ranking: Ranking = {
      god: godDto,
      points: 0,
      wins: 0,
    };
    return ranking;
  }

  private updateRankingOfGod(rankingOfGod: RankingUpdateDto, rankingToUpdate: Ranking): Ranking {
    rankingToUpdate.wins += rankingOfGod.isWinner ? CONSTANTS.NUMBER_ONE : CONSTANTS.NUMBER_ZERO;
    rankingToUpdate.points += rankingOfGod.pointsEarned;
    return rankingToUpdate;
  }

  getGodsToUpdate(rankingListToUpdate: Ranking[], godListToUpdate: RankingUpdateDto[]): Ranking[] {
    rankingListToUpdate.map(godToUpdate => {
      const god = godListToUpdate.find(x => x.godId === godToUpdate.god.godId);
      if (!!god) return this.updateRankingOfGod(god, godToUpdate);
    });
    return this.extractElementsUndefined(rankingListToUpdate);
  }
}
