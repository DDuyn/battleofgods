import { Module } from '@nestjs/common';
import { CompetitionAPIModule } from './Competition/CompetitionAPI.module';
import { GodAPIModule } from './God/GodAPI.module';
import { RankingAPIModule } from './Ranking/RankingAPI.module';

@Module({
  imports: [
    CompetitionAPIModule,
    GodAPIModule,
    RankingAPIModule
  ],
  exports: [
    CompetitionAPIModule,
    GodAPIModule,
    RankingAPIModule
  ],
})
export class APIModule {}
