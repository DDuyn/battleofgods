import { Module } from '@nestjs/common';
import { CompetitionInfrastructureModule } from './Competition/CompetitionInfrastructure.module';
import { GodInfrastructureModule } from './God/GodInfrastructure.module';
import { RankingInfrastructureModule } from './Ranking/RankingInfrastructure.module';
import { RoundRepositoryModule } from './Round/RoundRepository.module';
import { SeasonRepositoryModule } from './Season/SeasonRepository.module';

@Module({
  imports: [
    GodInfrastructureModule,
    RankingInfrastructureModule,
    CompetitionInfrastructureModule,
    SeasonRepositoryModule,
    RoundRepositoryModule,
  ],
  exports: [
    GodInfrastructureModule,
    RankingInfrastructureModule,
    CompetitionInfrastructureModule,
    SeasonRepositoryModule,
    RoundRepositoryModule,
  ],
})
export class InfrastructureModule {}
