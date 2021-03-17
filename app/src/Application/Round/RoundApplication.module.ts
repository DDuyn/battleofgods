import { Module } from '@nestjs/common';
import { RoundModule } from 'src/Domain/Round/Round.module';
import { RoundInfrastructureModule } from 'src/Infrastructure/Round/RoundInfrastructure.module';
import { CounterApplicationModule } from '../Counter/CounterApplication.module';
import { SharedApplicationModule } from '../Shared/SharedApplication.module';
import { RoundHelper } from './Services/Helper/Round.helper';
import { RoundService } from './Services/Round.service';

@Module({
  imports: [RoundModule, RoundInfrastructureModule, SharedApplicationModule, CounterApplicationModule],
  providers: [
    {
      provide: 'IRoundService',
      useClass: RoundService,
    },
    {
      provide: 'RoundHelper',
      useClass: RoundHelper,
    },
  ],
  exports: [
    {
      provide: 'IRoundService',
      useClass: RoundService,
    },
  ],
})
export class RoundApplicationModule {}
