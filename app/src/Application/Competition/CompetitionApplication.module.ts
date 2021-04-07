import { Module } from '@nestjs/common';
import { CompetitionModule } from 'src/Domain/Competition/Competition.module';
import { CompetitionInfrastructureModule } from 'src/Infrastructure/Competition/CompetitionInfrastructure.module';
import { CounterApplicationModule } from '../Counter/CounterApplication.module';
import { SharedApplicationModule } from '../Shared/SharedApplication.module';
import { TypeCompetitionApplicationModule } from '../TypeCompetition/TypeCompetitionApplication.module';
import { CompetitionService } from './Services/Competition.service';
import { CompetitionHelper } from './Services/Helper/Competition.helper';

@Module({
  imports: [
    CompetitionModule,
    CompetitionInfrastructureModule,
    SharedApplicationModule,
    CounterApplicationModule,
    TypeCompetitionApplicationModule,
  ],
  providers: [
    {
      provide: 'ICompetitionService',
      useClass: CompetitionService,
    },
    {
      provide: 'CompetitionHelper',
      useClass: CompetitionHelper,
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
