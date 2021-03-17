import { Module } from '@nestjs/common';
import { RankingModule } from 'src/Domain/Ranking/Ranking.module';
import { RankingInfrastructureModule } from 'src/Infrastructure/Ranking/RankingInfrastructure.module';
import { CounterApplicationModule } from '../Counter/CounterApplication.module';
import { GodApplicationModule } from '../God/GodApplication.module';
import { SharedApplicationModule } from '../Shared/SharedApplication.module';
import { RankingHelper } from './Services/Helper/Ranking.helper';
import { RankingService } from './Services/Ranking.service';

@Module({
  imports: [RankingModule, RankingInfrastructureModule, GodApplicationModule, SharedApplicationModule, CounterApplicationModule],
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
