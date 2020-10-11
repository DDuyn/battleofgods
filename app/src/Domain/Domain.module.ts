import { Module } from '@nestjs/common';
import { CompetitionModule } from './Competition/Competition.module';
import { GodModule } from './God/God.module';
import { RankingModule } from './Ranking/Ranking.module';

@Module({
  imports: [GodModule, RankingModule, CompetitionModule],
  exports: [GodModule, RankingModule, CompetitionModule],
})
export class DomainModule {}
