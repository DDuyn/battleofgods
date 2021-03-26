import { Module } from '@nestjs/common';
import { CompetitionInfrastructureModule } from './Competition/CompetitionInfrastructure.module';
import { CounterInfrastructureModule } from './Counter/CounterInfrastructure.module';
import { GodInfrastructureModule } from './God/GodInfrastructure.module';
import { InscriptionInfrastructureModule } from './Inscription/InscriptionInfrastructure.module';
import { MatchInfrastructureModule } from './Match/MatchInfrastructure.module';
import { PositionInfrastructureModule } from './Position/PositionInfrastructure.module';
import { RankingInfrastructureModule } from './Ranking/RankingInfrastructure.module';
import { RegionInfrastructureModule } from './Region/RegionInfrastructure.module';
import { RoundInfrastructureModule } from './Round/RoundInfrastructure.module';
import { SeasonInfrastructureModule } from './Season/SeasonInfrastructure.module';
import { TypeCompetitionInfrastructureModule } from './TypeCompetition/TypeCompetitionInfrastructure.module';

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
    InscriptionInfrastructureModule,
    RegionInfrastructureModule,
    TypeCompetitionInfrastructureModule,
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
    InscriptionInfrastructureModule,
    RegionInfrastructureModule,
    TypeCompetitionInfrastructureModule,
  ],
})
export class InfrastructureModule {}
