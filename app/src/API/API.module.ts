import { Module } from '@nestjs/common';
import { CompetitionAPIModule } from './Competition/CompetitionAPI.module';
import { GodAPIModule } from './God/GodAPI.module';
import { InscriptionAPIModule } from './Inscription/InscriptionAPI.module';
import { MatchAPIModule } from './Match/MatchAPI.module';
import { PointsApiModule } from './Points/PointsAPI.module';
import { PositionAPIModule } from './Position/PositionAPI.module';
import { RankingAPIModule } from './Ranking/RankingAPI.module';
import { RegionAPIModule } from './Region/RegionAPI.module';
import { RoundAPIModule } from './Round/RoundAPI.module';
import { SeasonAPIModule } from './Season/SeasonAPI.module';
import { TypeCompetitionAPIModule } from './TypeCompetition/TypeCompetitionAPI.module';

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
    RegionAPIModule,
    TypeCompetitionAPIModule,
    PointsApiModule,
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
    RegionAPIModule,
    TypeCompetitionAPIModule,
    PointsApiModule,
  ],
})
export class APIModule {}
