import { Module } from '@nestjs/common';
import { GodModule } from './God/God.module';
import { RankingModule } from './Ranking/Ranking.module';

@Module({
  imports: [GodModule, RankingModule],
  exports: [GodModule, RankingModule],
})
export class DomainModule {}
