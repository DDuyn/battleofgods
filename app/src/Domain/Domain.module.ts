import { Module } from '@nestjs/common';
import { CompetitionModule } from './Competition/Competition.module';
import { CounterModule } from './Counter/Counter.module';
import { GodModule } from './God/God.module';
import { InscriptionModule } from './Inscription/Inscription.module';
import { MatchModule } from './Match/Match.module';
import { PositionModule } from './Position/Position.module';
import { RankingModule } from './Ranking/Ranking.module';
import { RegionModule } from './Region/Region.module';
import { RoundModule } from './Round/Round.module';
import { SeasonModule } from './Season/Season.module';
import { TypeCompetitionModule } from './TypeCompetition/TypeCompetition.module';

@Module({
  imports: [
    GodModule,
    RankingModule,
    CompetitionModule,
    SeasonModule,
    RoundModule,
    CounterModule,
    MatchModule,
    PositionModule,
    InscriptionModule,
    RegionModule,
    TypeCompetitionModule,
  ],
  exports: [
    GodModule,
    RankingModule,
    CompetitionModule,
    SeasonModule,
    RoundModule,
    CounterModule,
    MatchModule,
    PositionModule,
    InscriptionModule,
    RegionModule,
    TypeCompetitionModule,
  ],
})
export class DomainModule {}
