import { Inject, Injectable } from '@nestjs/common';
import { ICounterService } from 'src/Application/Counter/Services/Interfaces/ICounter.service';
import { HelperService } from 'src/Application/Utils/Services/Helper.service';
import { Season } from 'src/Domain/Season/Model/Season';

@Injectable()
export class SeasonHelper extends HelperService {
  constructor(
    @Inject('ICounterService') private readonly counterService: ICounterService,
  ) {
    super();
  }
  getNextSequenceValue(model: string): Promise<number> {
    return this.counterService.getNextSequenceValue(model);
  }
  setSeasonToUpdate(season: Season): Season {
    const seasonUpdate: Season = {
      season: season.season,
      totalCompetition: season.totalCompetition,
      competitionPlayed: season.competitionPlayed + 1,
      isFinished: this.isFinishedSeason(
        season.competitionPlayed + 1,
        season.totalCompetition,
      ),
    };
    return seasonUpdate;
  }

  private isFinishedSeason(
    competitionPlayed: number,
    totalCompetition: number,
  ): boolean {
    return competitionPlayed === totalCompetition;
  }
}