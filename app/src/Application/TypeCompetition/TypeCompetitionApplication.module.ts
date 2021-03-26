import { Module } from '@nestjs/common';
import { TypeCompetitionInfrastructureModule } from 'src/Infrastructure/TypeCompetition/TypeCompetitionInfrastructure.module';
import { TypeCompetitionModule } from '../../Domain/TypeCompetition/TypeCompetition.module';
import { CounterApplicationModule } from '../Counter/CounterApplication.module';
import { SharedApplicationModule } from '../Shared/SharedApplication.module';
import { TypeCompetitionHelper } from './Services/Helper/TypeCompetition.helper';
import { TypeCompetitionService } from './Services/TypeCompetition.service';
@Module({
  imports: [TypeCompetitionModule, TypeCompetitionInfrastructureModule, SharedApplicationModule, CounterApplicationModule],
  providers: [
    {
      provide: 'ITypeCompetitionService',
      useClass: TypeCompetitionService,
    },
    {
      provide: 'TypeCompetitionHelper',
      useClass: TypeCompetitionHelper,
    },
  ],
  exports: [
    {
      provide: 'ITypeCompetitionService',
      useClass: TypeCompetitionService,
    },
  ],
})
export class TypeCompetitionApplicationModule {}
