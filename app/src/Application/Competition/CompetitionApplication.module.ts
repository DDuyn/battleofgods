import { Module } from '@nestjs/common';
import { CompetitionModule } from 'src/Domain/Competition/Competition.module';
import { CompetitionInfrastructureModule } from 'src/Infrastructure/Competition/CompetitionInfrastructure.module';
import { CompetitionService } from './Services/Competition.service';

@Module({
  imports: [CompetitionModule, CompetitionInfrastructureModule],
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
