import { Module } from '@nestjs/common';
import { GodInfrastructureModule } from 'src/Infrastructure/God/GodInfrastructure.module';
import { RankingInfrastructureModule } from 'src/Infrastructure/Ranking/RankingInfrastructure.module';

@Module({
  imports: [RankingInfrastructureModule, GodInfrastructureModule],
})
export class RankingModule {}
