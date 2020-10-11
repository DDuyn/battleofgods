import { Module } from '@nestjs/common';
import { CompetitionModule } from 'src/Domain/Competition/Competition.module';
import { CompetitionRepositoryModule } from 'src/Infrastructure/Competition/CompetitionRepository.module';
import { CompetitionController } from './Controllers/Competition.controller';
import { CompetitionService } from './Services/Competition.service';

@Module({
  controllers: [CompetitionController],
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
  imports: [CompetitionModule, CompetitionRepositoryModule],
})
export class CompetitionApplicationModule {}
