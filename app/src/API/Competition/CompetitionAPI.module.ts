import { Module } from '@nestjs/common';
import { CompetitionController } from './Controllers/Competition.controller';
import { CompetitionApplicationModule } from '../../Application/Competition/CompetitionApplication.module';
import { CompetitionRepositoryModule } from '../../Infrastructure/Competition/CompetitionRepository.module';

@Module({
  controllers: [CompetitionController],
  imports: [CompetitionApplicationModule, CompetitionRepositoryModule],
})
export class CompetitionAPIModule {}
