import { Module } from '@nestjs/common';
import { CompetitionInfrastructureModule } from './Competition/CompetitionInfrastructure.module';
import { GodInfrastructureModule } from './God/GodInfrastructure.module';
import { RankingInfrastructureModule } from './Ranking/RankingInfrastructure.module';
import { RoundInfrastructureModule } from './Round/RoundInfrastructure.module';
import { SeasonRepositoryModule } from './Season/SeasonRepository.module';

@Module({
  imports: [
    GodInfrastructureModule,
    RankingInfrastructureModule,
    CompetitionInfrastructureModule,
    SeasonRepositoryModule,
    RoundInfrastructureModule,
  ],
  exports: [
    GodInfrastructureModule,
    RankingInfrastructureModule,
    CompetitionInfrastructureModule,
    SeasonRepositoryModule,
    RoundInfrastructureModule,
  ],
})
export class InfrastructureModule {}
