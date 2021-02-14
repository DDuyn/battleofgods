import { Module } from '@nestjs/common';
import { GodInfrastructureModule } from 'src/Infrastructure/God/GodInfrastructure.module';
import { RankingRepositoryModule } from 'src/Infrastructure/Ranking/RankingRepository.module';

@Module({
  imports: [RankingRepositoryModule, GodInfrastructureModule],
})
export class RankingModule {}
