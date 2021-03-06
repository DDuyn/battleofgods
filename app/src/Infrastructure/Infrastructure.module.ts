import { Module } from '@nestjs/common';
import { CompetitionInfrastructureModule } from './Competition/CompetitionInfrastructure.module';
import { GodInfrastructureModule } from './God/GodInfrastructure.module';
import { RankingInfrastructureModule } from './Ranking/RankingInfrastructure.module';
import { RoundInfrastructureModule } from './Round/RoundInfrastructure.module';
import { SeasonInfrastructureModule } from './Season/SeasonInfrastructure.module';
import { CounterInfrastructureModule } from './Counter/CounterInfrastructure.module';
import { MatchInfrastructureModule } from './Match/MatchInfrastructure.module';
import { PositionInfrastructureModule } from './Position/PositionInfrastructure.module';

@Module({
  imports: [
    GodInfrastructureModule,
    RankingInfrastructureModule,
    CompetitionInfrastructureModule,
    SeasonInfrastructureModule,
    RoundInfrastructureModule,
    CounterInfrastructureModule,
    MatchInfrastructureModule,
    PositionInfrastructureModule,
  ],
  exports: [
    GodInfrastructureModule,
    RankingInfrastructureModule,
    CompetitionInfrastructureModule,
    SeasonInfrastructureModule,
    RoundInfrastructureModule,
    CounterInfrastructureModule,
    MatchInfrastructureModule,
    PositionInfrastructureModule,
  ],
})
export class InfrastructureModule {}
