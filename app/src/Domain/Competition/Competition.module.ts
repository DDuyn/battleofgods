import { Module } from '@nestjs/common';
import { CompetitionRepositoryModule } from 'src/Infrastructure/Competition/CompetitionRepository.module';
import { CompetitionService } from './Services/Competition.service';

@Module({
  imports: [CompetitionRepositoryModule],
  providers: [
    {
      provide: 'ICompetitionService',
      useClass: CompetitionService,
    },
  ],
  exports: [
    {
      provide: 'ICompetitionService',
      useClass: CompetitionService,
    },
  ],
})
export class CompetitionModule {}
