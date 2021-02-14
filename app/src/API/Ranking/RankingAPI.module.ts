import { Module } from '@nestjs/common';
import { RankingController } from './Controllers/Ranking.controller';
import { RankingApplicationModule } from '../../Application/Ranking/RankingApplication.module';
import { RankingInfrastructureModule } from '../../Infrastructure/Ranking/RankingInfrastructure.module';



@Module({
  controllers: [RankingController],
  imports: [RankingApplicationModule, RankingInfrastructureModule],

})
export class RankingAPIModule {}
