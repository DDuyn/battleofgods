import { Module } from '@nestjs/common';
import { InscriptionModule } from '../../Domain/Inscription/Inscription.module';
import { InscriptionInfrastructureModule } from '../../Infrastructure/Inscription/InscriptionInfrastructure.module';
import { CompetitionApplicationModule } from '../Competition/CompetitionApplication.module';
import { CounterApplicationModule } from '../Counter/CounterApplication.module';
import { GodApplicationModule } from '../God/GodApplication.module';
import { SeasonApplicationModule } from '../Season/SeasonApplication.module';
import { UtilsApplicationModule } from '../Utils/UtilsApplication.module';
import { InscriptionHelper } from './Services/Helper/Inscription.helper';
import { InscriptionService } from './Services/Inscription.service';

@Module({
  imports: [
    InscriptionModule,
    InscriptionInfrastructureModule,
    UtilsApplicationModule,
    GodApplicationModule,
    CompetitionApplicationModule,
    SeasonApplicationModule,
    CounterApplicationModule,
  ],
  providers: [
    {
      provide: 'IInscriptionService',
      useClass: InscriptionService,
    },
    {
      provide: 'InscriptionHelper',
      useClass: InscriptionHelper,
    },
  ],
  exports: [
    {
      provide: 'IInscriptionService',
      useClass: InscriptionService,
    },
  ],
})
export class InscriptionApplicationModule {}
