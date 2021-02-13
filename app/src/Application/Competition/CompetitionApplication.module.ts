import { Module } from '@nestjs/common';
import { CompetitionModule } from 'src/Domain/Competition/Competition.module';
import { CompetitionRepositoryModule } from 'src/Infrastructure/Competition/CompetitionRepository.module';

@Module({
  imports: [CompetitionModule, CompetitionRepositoryModule],
  exports: [CompetitionModule, CompetitionRepositoryModule]
})
export class CompetitionApplicationModule {}
