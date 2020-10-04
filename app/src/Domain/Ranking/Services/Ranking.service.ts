import { Inject, Injectable } from '@nestjs/common';
import { God } from 'src/Domain/God/Model/God';
import { IGodRepository } from 'src/Domain/God/Repositories/IGod.repository';
import { Ranking } from '../Model/Ranking';
import { IRankingRepository } from '../Repositories/IRanking.respository';
import { IRankingService } from './Interfaces/IRanking.service';

@Injectable()
export class RankingService implements IRankingService {
  constructor(
    @Inject('IRankingRepository')
    private readonly rankingRepository: IRankingRepository,
    @Inject('IGodRepository')
    private readonly godRepository: IGodRepository,
  ) {}

  async findAll(): Promise<Ranking[]> {
    return await this.rankingRepository.findAll();
  }

  async createRanking(): Promise<Ranking[]> {
    const gods: God[] = await this.godRepository.findAll();
    return await this.rankingRepository.createRanking(
      this.createInitialRanking(gods),
    );
  }

  private createInitialRanking(gods: God[]): Ranking[] {
    const rankingCreated: Ranking[] = [];
    gods.forEach(god => {
      rankingCreated.push({ god: god.name, points: 0, wins: 0 });
    });

    return rankingCreated;
  }
}
