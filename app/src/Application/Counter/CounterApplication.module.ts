import { Module } from '@nestjs/common';
import { CounterModule } from 'src/Domain/Counter/Counter.module';
import { CounterService } from './Services/Interfaces/Counter.service';
import { CounterInfrastructureModule } from '../../Infrastructure/Counter/CounterInfrastructure.module';


@Module({
  imports: [CounterModule, CounterInfrastructureModule],
  providers: [
    {
      provide: 'ICounterService',
      useClass: CounterService,
    }
  ],
  exports: [
    {
      provide: 'ICounterService',
      useClass: CounterService,
    },
  ],
})
export class CounterApplicationModule {}
