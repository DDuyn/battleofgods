import { Module } from '@nestjs/common';
import { GodModule } from 'src/Domain/God/God.module';
import { GodInfrastructureModule } from 'src/Infrastructure/God/GodInfrastructure.module';
import { UtilsApplicationModule } from '../Utils/UtilsApplication.module';
import { GodService } from './Services/God.service';
import { GodHelper } from './Services/Helper/God.helper';
import { CounterApplicationModule } from '../Counter/CounterApplication.module';
@Module({
  imports: [GodModule, GodInfrastructureModule, UtilsApplicationModule, CounterApplicationModule],
  providers: [
    {
      provide: 'IGodService',
      useClass: GodService,
    },
    {
      provide: 'GodHelper',
      useClass: GodHelper
    }
  ],
  exports: [
    {
      provide: 'IGodService',
      useClass: GodService,
    },
  ],
})
export class GodApplicationModule {}
