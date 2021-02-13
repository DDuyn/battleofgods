import { Module } from '@nestjs/common';
import { RankingController } from './Controllers/Ranking.controller';
import { RankingApplicationModule } from '../../Application/Ranking/RankingApplication.module';
import { RankingRepositoryModule } from '../../Infrastructure/Ranking/RankingRepository.module';



@Module({
  controllers: [RankingController],
  imports: [RankingApplicationModule, RankingRepositoryModule],

})
export class RankingAPIModule {}
