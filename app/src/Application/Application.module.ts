import { Module } from '@nestjs/common';
import { DomainModule } from 'src/Domain/domain.module';
import { GodApplicationModule } from './God/GodApplication.module';
import { RankingApplicationModule } from './Ranking/RankingApplication.module';

@Module({
  imports: [DomainModule, GodApplicationModule, RankingApplicationModule],
  exports: [GodApplicationModule, RankingApplicationModule],
})
export class ApplicationModule {}
