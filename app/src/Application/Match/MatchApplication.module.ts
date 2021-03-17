import { Module } from '@nestjs/common';
import { MatchModule } from 'src/Domain/Match/Match.module';
import { MatchInfrastructureModule } from 'src/Infrastructure/Match/MatchInfrastructure.module';
import { CompetitionApplicationModule } from '../Competition/CompetitionApplication.module';
import { CounterApplicationModule } from '../Counter/CounterApplication.module';
import { GodApplicationModule } from '../God/GodApplication.module';
import { RoundApplicationModule } from '../Round/RoundApplication.module';
import { SeasonApplicationModule } from '../Season/SeasonApplication.module';
import { SharedApplicationModule } from '../Shared/SharedApplication.module';
import { MatchHelper } from './Services/Helpers/Match.helper';
import { MatchService } from './Services/Match.service';

@Module({
  imports: [
    MatchModule,
    MatchInfrastructureModule,
    SharedApplicationModule,
    GodApplicationModule,
    CompetitionApplicationModule,
    SeasonApplicationModule,
    RoundApplicationModule,
    CounterApplicationModule,
  ],
  providers: [
    {
      provide: 'IMatchService',
      useClass: MatchService,
    },
    {
      provide: 'MatchHelper',
      useClass: MatchHelper,
    },
  ],
  exports: [
    {
      provide: 'IMatchService',
      useClass: MatchService,
    },
  ],
})
export class MatchApplicationModule {}
