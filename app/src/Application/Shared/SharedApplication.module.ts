import { Module } from '@nestjs/common';
import { CounterApplicationModule } from '../Counter/CounterApplication.module';
import { UtilsService } from './Services/Utils.service';
@Module({
  imports: [CounterApplicationModule],
  providers: [
    {
      provide: 'UtilsService',
      useClass: UtilsService,
    },
  ],
})
export class SharedApplicationModule {}
