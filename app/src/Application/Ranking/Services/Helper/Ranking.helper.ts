import { Inject, Injectable } from '@nestjs/common';
import { IHelperService } from 'src/Application/Utils/Services/Interfaces/IHelper.service';
import { IGodService } from 'src/Application/God/Services/Interfaces/IGod.service';
import GodDto from 'src/Application/God/Dto/God.dto';
import { CONSTANTS } from 'src/Utils/Constants/Constants';
import { Ranking } from 'src/Domain/Ranking/Model/Ranking';
import RankingUpdateDto from 'src/Application/Ranking/Dto/RankingUpdate.dto';

@Injectable()
export class RankingHelper {
  constructor(
    @Inject('IHelperService') private readonly helperService: IHelperService,
    @Inject('IGodService') private readonly godService: IGodService,
  ) {}
  getNextSequenceValue(model: string): Promise<number> {
    return this.helperService.getNextSequenceValue(model);
  }

  async createInitialRanking(): Promise<Ranking[]> {
    const gods: GodDto[] = await this.godService.findAll(CONSTANTS.SHOWID);
    const rankingCreated: Ranking[] = [];
    gods.forEach(god => {
      rankingCreated.push({ god: god, points: 0, wins: 0 });
    });

    return rankingCreated;
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
    return this.helperService.extractElementsUndefined(rankingListToUpdate);
  }
}
