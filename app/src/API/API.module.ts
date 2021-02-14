import { Module } from '@nestjs/common';
import { CompetitionAPIModule } from './Competition/CompetitionAPI.module';
import { GodAPIModule } from './God/GodAPI.module';
import { RankingAPIModule } from './Ranking/RankingAPI.module';
import { RoundAPIModule } from './Round/RoundAPI.module';
import { SeasonAPIModule } from './Season/SeasonAPI.module';

@Module({
  imports: [
    CompetitionAPIModule,
    GodAPIModule,
    RankingAPIModule,
    RoundAPIModule,
    SeasonAPIModule
  ],
  exports: [
    CompetitionAPIModule,
    GodAPIModule,
    RankingAPIModule,
    RoundAPIModule,
    SeasonAPIModule
  ],
})
export class APIModule {}
