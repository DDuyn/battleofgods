import { Module } from '@nestjs/common';
import { GodRepositoryModule } from './God/GodRepository.module';
import { RankingRepositoryModule } from './Ranking/RankingRepository.module';

@Module({
  imports: [GodRepositoryModule, RankingRepositoryModule],
  exports: [GodRepositoryModule, RankingRepositoryModule],
})
export class InfrastructureModule {}
