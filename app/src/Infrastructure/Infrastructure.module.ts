import { Module } from '@nestjs/common';
import { CompetitionRepositoryModule } from './Competition/CompetitionRepository.module';
import { GodRepositoryModule } from './God/GodRepository.module';
import { RankingRepositoryModule } from './Ranking/RankingRepository.module';
import { SeasonRepositoryModule } from './Season/SeasonRepository.module';

@Module({
  imports: [
    GodRepositoryModule,
    RankingRepositoryModule,
    CompetitionRepositoryModule,
    SeasonRepositoryModule,
  ],
  exports: [
    GodRepositoryModule,
    RankingRepositoryModule,
    CompetitionRepositoryModule,
    SeasonRepositoryModule,
  ],
})
export class InfrastructureModule {}
