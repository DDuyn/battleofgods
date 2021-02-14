import { Module } from '@nestjs/common';
import { CompetitionAPIModule } from './Competition/CompetitionAPI.module';
import { GodAPIModule } from './God/GodAPI.module';
import { RankingAPIModule } from './Ranking/RankingAPI.module';
import { RoundAPIModule } from './Round/RoundAPI.module';

@Module({
  imports: [
    CompetitionAPIModule,
    GodAPIModule,
    RankingAPIModule,
    RoundAPIModule
  ],
  exports: [
    CompetitionAPIModule,
    GodAPIModule,
    RankingAPIModule,
    RoundAPIModule
  ],
})
export class APIModule {}
