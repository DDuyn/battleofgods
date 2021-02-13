import { Module } from '@nestjs/common';
import { CompetitionController } from './Controllers/Competition.controller';
import { CompetitionService } from '../../Application/Competition/Services/Competition.service';
import { CompetitionApplicationModule } from '../../Application/Competition/CompetitionApplication.module';

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
  imports: [CompetitionApplicationModule],
})
export class CompetitionAPIModule {}
