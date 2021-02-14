import { Module } from '@nestjs/common';
import { CompetitionInfrastructureModule } from './Competition/CompetitionInfrastructure.module';
import { GodInfrastructureModule } from './God/GodInfrastructure.module';
import { RankingRepositoryModule } from './Ranking/RankingRepository.module';
import { RoundRepositoryModule } from './Round/RoundRepository.module';
import { SeasonRepositoryModule } from './Season/SeasonRepository.module';

@Module({
  imports: [
    GodInfrastructureModule,
    RankingRepositoryModule,
    CompetitionInfrastructureModule,
    SeasonRepositoryModule,
    RoundRepositoryModule,
  ],
  exports: [
    GodInfrastructureModule,
    RankingRepositoryModule,
    CompetitionInfrastructureModule,
    SeasonRepositoryModule,
    RoundRepositoryModule,
  ],
})
export class InfrastructureModule {}
