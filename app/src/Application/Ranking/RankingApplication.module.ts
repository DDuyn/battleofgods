import { Module } from '@nestjs/common';
import { RankingModule } from 'src/Domain/Ranking/Ranking.module';
import { RankingRepositoryModule } from 'src/Infrastructure/Ranking/RankingRepository.module';
import { RankingService } from './Services/Ranking.service';
import { GodApplicationModule } from '../God/GodApplication.module';

@Module({
  imports: [RankingModule, RankingRepositoryModule, GodApplicationModule],
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
