import { Module } from '@nestjs/common';
import { CompetitionAPIModule } from './Competition/CompetitionAPI.module';
import { GodAPIModule } from './God/GodAPI.module';
import { InscriptionAPIModule } from './Inscription/InscriptionAPI.module';
import { MatchAPIModule } from './Match/MatchAPI.module';
import { PositionAPIModule } from './Position/PositionAPI.module';
import { RankingAPIModule } from './Ranking/RankingAPI.module';
import { RoundAPIModule } from './Round/RoundAPI.module';
import { SeasonAPIModule } from './Season/SeasonAPI.module';

@Module({
  imports: [
    CompetitionAPIModule,
    GodAPIModule,
    RankingAPIModule,
    RoundAPIModule,
    SeasonAPIModule,
    MatchAPIModule,
    PositionAPIModule,
    InscriptionAPIModule,
  ],
  exports: [
    CompetitionAPIModule,
    GodAPIModule,
    RankingAPIModule,
    RoundAPIModule,
    SeasonAPIModule,
    MatchAPIModule,
    PositionAPIModule,
    InscriptionAPIModule,
  ],
})
export class APIModule {}
