import { Module } from '@nestjs/common';
import { DomainModule } from 'src/Domain/domain.module';
import { CompetitionApplicationModule } from './Competition/CompetitionApplication.module';
import { GodApplicationModule } from './God/GodApplication.module';
import { RankingApplicationModule } from './Ranking/RankingApplication.module';
import { RoundApplicationModule } from './Round/RoundApplication.module';
import { SeasonApplicationModule } from './Season/SeasonApplication.module';
import { MatchApplicationModule } from './Match/MatchApplication.module';
import { CounterApplicationModule } from './Counter/CounterApplication.module';

@Module({
  imports: [
    DomainModule,
    GodApplicationModule,
    RankingApplicationModule,
    CompetitionApplicationModule,
    SeasonApplicationModule,
    RoundApplicationModule,
    MatchApplicationModule,
    CounterApplicationModule
  ],
  exports: [
    GodApplicationModule,
    RankingApplicationModule,
    CompetitionApplicationModule,
    SeasonApplicationModule,
    RoundApplicationModule,
    MatchApplicationModule,
    CounterApplicationModule
  ],
})
export class ApplicationModule {}
