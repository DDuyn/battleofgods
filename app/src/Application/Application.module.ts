import { Module } from '@nestjs/common';
import { DomainModule } from 'src/Domain/domain.module';
import { CompetitionApplicationModule } from './Competition/CompetitionApplication.module';
import { CounterApplicationModule } from './Counter/CounterApplication.module';
import { GodApplicationModule } from './God/GodApplication.module';
import { InscriptionApplicationModule } from './Inscription/InscriptionApplication.module';
import { MatchApplicationModule } from './Match/MatchApplication.module';
import { PositionApplicationModule } from './Position/PositionApplication.module';
import { RankingApplicationModule } from './Ranking/RankingApplication.module';
import { RoundApplicationModule } from './Round/RoundApplication.module';
import { SeasonApplicationModule } from './Season/SeasonApplication.module';

@Module({
  imports: [
    DomainModule,
    GodApplicationModule,
    RankingApplicationModule,
    CompetitionApplicationModule,
    SeasonApplicationModule,
    RoundApplicationModule,
    MatchApplicationModule,
    CounterApplicationModule,
    PositionApplicationModule,
    InscriptionApplicationModule,
  ],
  exports: [
    GodApplicationModule,
    RankingApplicationModule,
    CompetitionApplicationModule,
    SeasonApplicationModule,
    RoundApplicationModule,
    MatchApplicationModule,
    CounterApplicationModule,
    PositionApplicationModule,
    InscriptionApplicationModule,
  ],
})
export class ApplicationModule {}
