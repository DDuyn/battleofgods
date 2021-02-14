import { Module } from '@nestjs/common';
import { CompetitionInfrastructureModule } from './Competition/CompetitionInfrastructure.module';
import { GodRepositoryModule } from './God/GodRepository.module';
import { RankingRepositoryModule } from './Ranking/RankingRepository.module';
import { RoundRepositoryModule } from './Round/RoundRepository.module';
import { SeasonRepositoryModule } from './Season/SeasonRepository.module';

@Module({
  imports: [
    GodRepositoryModule,
    RankingRepositoryModule,
    CompetitionInfrastructureModule,
    SeasonRepositoryModule,
    RoundRepositoryModule,
  ],
  exports: [
    GodRepositoryModule,
    RankingRepositoryModule,
    CompetitionInfrastructureModule,
    SeasonRepositoryModule,
    RoundRepositoryModule,
  ],
})
export class InfrastructureModule {}
