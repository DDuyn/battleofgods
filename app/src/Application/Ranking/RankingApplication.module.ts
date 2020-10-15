import { Module } from '@nestjs/common';
import { RankingModule } from 'src/Domain/Ranking/Ranking.module';
import { RankingRepositoryModule } from 'src/Infrastructure/Ranking/RankingRepository.module';
import { GodApplicationModule } from '../God/GodApplication.module';
import { RankingController } from './Controllers/Ranking.controller';
import { RankingService } from './Services/Ranking.service';

@Module({
  controllers: [RankingController],
  imports: [RankingModule, RankingRepositoryModule, GodApplicationModule],
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
export class RankingApplicationModule {}
