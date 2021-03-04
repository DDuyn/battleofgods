import { Module } from '@nestjs/common';
import { CompetitionModule } from 'src/Domain/Competition/Competition.module';
import { CompetitionInfrastructureModule } from 'src/Infrastructure/Competition/CompetitionInfrastructure.module';
import { UtilsApplicationModule } from '../Utils/UtilsApplication.module';
import { CompetitionService } from './Services/Competition.service';
import { CounterApplicationModule } from '../Counter/CounterApplication.module';
import { CompetitionHelper } from './Services/Helper/Competition.helper';

@Module({
  imports: [CompetitionModule, CompetitionInfrastructureModule, UtilsApplicationModule, CounterApplicationModule],
  providers: [
    {
      provide: 'ICompetitionService',
      useClass: CompetitionService,
    },
    {
      provide: 'CompetitionHelper',
      useClass: CompetitionHelper
    }
  ],
  exports: [
    {
      provide: 'ICompetitionService',
      useClass: CompetitionService,
    },
  ],
})
export class CompetitionApplicationModule {}
