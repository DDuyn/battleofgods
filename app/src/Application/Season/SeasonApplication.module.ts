import { Module } from '@nestjs/common';
import { SeasonModule } from 'src/Domain/Season/Season.module';
import { SeasonInfrastructureModule } from 'src/Infrastructure/Season/SeasonInfrastructure.module';
import { CounterApplicationModule } from '../Counter/CounterApplication.module';
import { SharedApplicationModule } from '../Shared/SharedApplication.module';
import { SeasonHelper } from './Services/Helper/Season.helper';
import { SeasonService } from './Services/Season.service';

@Module({
  providers: [
    {
      provide: 'ISeasonService',
      useClass: SeasonService,
    },
    {
      provide: 'SeasonHelper',
      useClass: SeasonHelper,
    },
  ],
  exports: [
    {
      provide: 'ISeasonService',
      useClass: SeasonService,
    },
  ],
  imports: [SeasonModule, SeasonInfrastructureModule, SharedApplicationModule, CounterApplicationModule],
})
export class SeasonApplicationModule {}
