import { Module } from '@nestjs/common';
import { RoundModule } from 'src/Domain/Round/Round.module';
import { RoundInfrastructureModule } from 'src/Infrastructure/Round/RoundInfrastructure.module';
import { UtilsApplicationModule } from '../Utils/UtilsApplication.module';
import { RoundService } from './Services/Round.service';

@Module({
  imports: [RoundModule, RoundInfrastructureModule, UtilsApplicationModule],
  providers: [
    {
      provide: 'IRoundService',
      useClass: RoundService,
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
