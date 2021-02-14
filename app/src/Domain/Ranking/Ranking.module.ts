import { Module } from '@nestjs/common';
import { GodModule } from '../God/God.module';

@Module({
  exports: [RankingModule],
  imports: [GodModule],
})
export class RankingModule {}
