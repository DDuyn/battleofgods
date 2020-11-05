import { Module } from '@nestjs/common';
import { CompetitionModule } from './Competition/Competition.module';
import { GodModule } from './God/God.module';
import { RankingModule } from './Ranking/Ranking.module';
import { RoundModule } from './Round/Round.module';
import { SeasonModule } from './Season/Season.module';

@Module({
  imports: [
    GodModule,
    RankingModule,
    CompetitionModule,
    SeasonModule,
    RoundModule,
  ],
  exports: [
    GodModule,
    RankingModule,
    CompetitionModule,
    SeasonModule,
    RoundModule,
  ],
})
export class DomainModule {}
