import { Module } from '@nestjs/common';
import { MatchModule } from 'src/Domain/Match/Match.module';
import { MatchInfrastructureModule } from 'src/Infrastructure/Match/MatchInfrastructure.module';
import { GodApplicationModule } from '../God/GodApplication.module';
import { UtilsApplicationModule } from '../Utils/UtilsApplication.module';
import { MatchService } from './Services/Match.service';
import { CompetitionApplicationModule } from '../Competition/CompetitionApplication.module';
import { SeasonApplicationModule } from '../Season/SeasonApplication.module';
import { RoundApplicationModule } from '../Round/RoundApplication.module';
import { MatchHelper } from './Services/Helpers/Match.helper';

@Module({
  imports: [
    MatchModule,
    MatchInfrastructureModule,
    UtilsApplicationModule,
    GodApplicationModule,
    CompetitionApplicationModule,
    SeasonApplicationModule,
    RoundApplicationModule,
  ],
  providers: [
    {
      provide: 'IMatchService',
      useClass: MatchService,
    },
    {
      provide: 'MatchHelper',
      useClass: MatchHelper
    }
  ],
  exports: [
    {
      provide: 'IMatchService',
      useClass: MatchService,
    }
  ],
})
export class MatchApplicationModule {}
