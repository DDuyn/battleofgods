import { Module } from '@nestjs/common';
import { GodRepositoryModule } from 'src/Infrastructure/God/GodRepository.module';
import { RankingRepositoryModule } from 'src/Infrastructure/Ranking/RankingRepository.module';

@Module({
  imports: [RankingRepositoryModule, GodRepositoryModule],
})
export class RankingModule {}
