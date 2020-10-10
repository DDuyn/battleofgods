import { Module } from '@nestjs/common';
import { DomainModule } from 'src/Domain/domain.module';
import { RankingController } from './Controllers/Ranking.controller';

@Module({
  controllers: [RankingController],
  imports: [DomainModule],
})
export class RankingApplicationModule {}
