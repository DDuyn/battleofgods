import { Module } from '@nestjs/common';
import { CompetitionModule } from './Competition/Competition.module';
import { GodModule } from './God/God.module';
import { RankingModule } from './Ranking/Ranking.module';
import { SeasonModule } from './Season/Season.module';

@Module({
  imports: [GodModule, RankingModule, CompetitionModule, SeasonModule],
  exports: [GodModule, RankingModule, CompetitionModule, SeasonModule],
})
export class DomainModule {}
