import { Module } from '@nestjs/common';
import { GodRepositoryModule } from 'src/Infrastructure/God/GodRepository.module';
import { RankingRepositoryModule } from 'src/Infrastructure/Ranking/RankingRepository.module';
import { RankingService } from './Services/Ranking.service';

@Module({
  imports: [RankingRepositoryModule, GodRepositoryModule],
  providers: [
    {
      provide: 'IRankingService',
      useClass: RankingService,
    },
  ],
  exports: [
    {
      provide: 'IRankingService',
      useClass: RankingService,
    },
  ],
})
export class RankingModule {}
