import { Module } from '@nestjs/common';
import { CompetitionModule } from 'src/Domain/Competition/Competition.module';
import { CompetitionRepositoryModule } from 'src/Infrastructure/Competition/CompetitionRepository.module';
import { CompetitionService } from './Services/Competition.service';

@Module({
  imports: [CompetitionModule, CompetitionRepositoryModule],
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
export class CompetitionApplicationModule {}
