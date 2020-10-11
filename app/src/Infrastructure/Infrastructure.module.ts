import { Module } from '@nestjs/common';
import { CompetitionRepositoryModule } from './Competition/CompetitionRepository.module';
import { GodRepositoryModule } from './God/GodRepository.module';
import { RankingRepositoryModule } from './Ranking/RankingRepository.module';

@Module({
  imports: [
    GodRepositoryModule,
    RankingRepositoryModule,
    CompetitionRepositoryModule,
  ],
  exports: [
    GodRepositoryModule,
    RankingRepositoryModule,
    CompetitionRepositoryModule,
  ],
})
export class InfrastructureModule {}
