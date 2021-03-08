import { Module } from '@nestjs/common';
import { CounterApplicationModule } from '../Counter/CounterApplication.module';
import { HelperService } from './Services/Helper.service';
@Module({
  imports: [CounterApplicationModule],
  providers: [
    {
      provide: 'IHelperService',
      useClass: HelperService,
    },
  ],
})
export class UtilsApplicationModule {}
