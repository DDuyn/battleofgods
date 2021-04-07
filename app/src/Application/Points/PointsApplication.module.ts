import { Module } from '@nestjs/common';
import { PointsModule } from 'src/Domain/Points/Points.module';
import { PointsInfrastructureModule } from 'src/Infrastructure/Points/PointsInfrastructure.module';
import { CounterApplicationModule } from '../Counter/CounterApplication.module';
import { RoundApplicationModule } from '../Round/RoundApplication.module';
import { SharedApplicationModule } from '../Shared/SharedApplication.module';
import { TypeCompetitionApplicationModule } from '../TypeCompetition/TypeCompetitionApplication.module';
import { PointsHelper } from './Services/Helper/Points.helper';
import { PointsService } from './Services/Points.service';

@Module({
  imports: [
    PointsModule,
    PointsInfrastructureModule,
    TypeCompetitionApplicationModule,
    RoundApplicationModule,
    SharedApplicationModule,
    CounterApplicationModule,
  ],
  providers: [
    {
      provide: 'IPointsService',
      useClass: PointsService,
    },
    {
      provide: 'PointsHelper',
      useClass: PointsHelper,
    },
  ],
  exports: [
    {
      provide: 'IPointsService',
      useClass: PointsService,
    },
  ],
})
export class PointsApplicationModule {}
