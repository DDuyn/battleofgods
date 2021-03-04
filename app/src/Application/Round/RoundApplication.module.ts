import { Module } from '@nestjs/common';
import { RoundModule } from 'src/Domain/Round/Round.module';
import { RoundInfrastructureModule } from 'src/Infrastructure/Round/RoundInfrastructure.module';
import { UtilsApplicationModule } from '../Utils/UtilsApplication.module';
import { RoundHelper } from './Services/Helper/Round.helper';
import { RoundService } from './Services/Round.service';
import { CounterApplicationModule } from '../Counter/CounterApplication.module';

@Module({
  imports: [RoundModule, RoundInfrastructureModule, UtilsApplicationModule, CounterApplicationModule],
  providers: [
    {
      provide: 'IRoundService',
      useClass: RoundService,
    },
    {
      provide: 'RoundHelper',
      useClass: RoundHelper
    }
  ],
  exports: [
    {
      provide: 'IRoundService',
      useClass: RoundService,
    },
  ],
})
export class RoundApplicationModule {}
