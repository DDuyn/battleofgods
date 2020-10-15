import { Module } from '@nestjs/common';
import { DomainModule } from 'src/Domain/domain.module';
import { CompetitionApplicationModule } from './Competition/CompetitionApplication.module';
import { GodApplicationModule } from './God/GodApplication.module';
import { RankingApplicationModule } from './Ranking/RankingApplication.module';
import { SeasonApplicationModule } from './Season/SeasonApplication.module';

@Module({
  imports: [
    DomainModule,
    GodApplicationModule,
    RankingApplicationModule,
    CompetitionApplicationModule,
    SeasonApplicationModule
  ],
  exports: [
    GodApplicationModule,
    RankingApplicationModule,
    CompetitionApplicationModule,
    SeasonApplicationModule
  ],
})
export class ApplicationModule {}
