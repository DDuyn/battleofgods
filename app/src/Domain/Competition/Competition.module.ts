import { Module } from '@nestjs/common';
import { CompetitionRepositoryModule } from 'src/Infrastructure/Competition/CompetitionRepository.module';

@Module({
  imports: [CompetitionRepositoryModule],
})
export class CompetitionModule {}
