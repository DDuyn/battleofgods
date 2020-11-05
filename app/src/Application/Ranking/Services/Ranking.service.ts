import { Inject, Injectable } from '@nestjs/common';
import GodDto from 'src/Application/God/Dto/God.dto';
import { IGodService } from 'src/Application/God/Services/Interfaces/IGod.service';
import { Ranking } from 'src/Domain/Ranking/Model/Ranking';
import { IRankingRepository } from 'src/Domain/Ranking/Repositories/IRanking.repository';
import RankingDto from '../Dto/Ranking.dto';
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

  private createInitialRanking(gods: GodDto[]): Ranking[] {
    const rankingCreated: Ranking[] = [];
    gods.forEach(god => {
      rankingCreated.push({ god: god.name, points: 0, wins: 0 });
    });

    return rankingCreated;
  }
}
