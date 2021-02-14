import { Module } from '@nestjs/common';
import { RankingModule } from 'src/Domain/Ranking/Ranking.module';
import { RankingInfrastructureModule } from 'src/Infrastructure/Ranking/RankingInfrastructure.module';
import { RankingService } from './Services/Ranking.service';
import { GodApplicationModule } from '../God/GodApplication.module';

@Module({
  imports: [RankingModule, RankingInfrastructureModule, GodApplicationModule],
  providers: [
    {
      provide: 'IRankingService',
      useClass: RankingService,
    }
  ],
  exports: [
    {
      provide: 'IRankingService',
      useClass: RankingService,
    }
  ],
})
export class RankingApplicationModule {}
