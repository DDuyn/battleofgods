import { Module } from '@nestjs/common';
import { RankingModule } from 'src/Domain/Ranking/Ranking.module';
import { RankingInfrastructureModule } from 'src/Infrastructure/Ranking/RankingInfrastructure.module';
import { RankingService } from './Services/Ranking.service';
import { GodApplicationModule } from '../God/GodApplication.module';
import { RankingHelper } from './Services/Helper/Ranking.helper';
import { UtilsApplicationModule } from '../Utils/UtilsApplication.module';
import { CounterApplicationModule } from '../Counter/CounterApplication.module';

@Module({
  imports: [
    RankingModule,
    RankingInfrastructureModule,
    GodApplicationModule,
    UtilsApplicationModule,
    CounterApplicationModule,
  ],
  providers: [
    {
      provide: 'IRankingService',
      useClass: RankingService,
    },
    {
      provide: 'RankingHelper',
      useClass: RankingHelper,
    },
  ],
  exports: [
    {
      provide: 'IRankingService',
      useClass: RankingService,
    },
  ],
})
export class RankingApplicationModule {}
