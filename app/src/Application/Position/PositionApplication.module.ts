import { Module } from '@nestjs/common';
import { PositionModule } from 'src/Domain/Position/Position.module';
import { PositionInfrastructureModule } from '../../Infrastructure/Position/PositionInfrastructure.module';
import { CompetitionApplicationModule } from '../Competition/CompetitionApplication.module';
import { GodApplicationModule } from '../God/GodApplication.module';
import { RoundApplicationModule } from '../Round/RoundApplication.module';
import { SeasonApplicationModule } from '../Season/SeasonApplication.module';
import { SharedApplicationModule } from '../Shared/SharedApplication.module';
import { PositionHelper } from './Services/Helper/Position.helper';
import { PositionService } from './Services/Position.service';

@Module({
  imports: [
    PositionModule,
    PositionInfrastructureModule,
    SharedApplicationModule,
    GodApplicationModule,
    CompetitionApplicationModule,
    SeasonApplicationModule,
    RoundApplicationModule,
  ],
  providers: [
    {
      provide: 'IPositionService',
      useClass: PositionService,
    },
    {
      provide: 'PositionHelper',
      useClass: PositionHelper,
    },
  ],
  exports: [
    {
      provide: 'IPositionService',
      useClass: PositionService,
    },
  ],
})
export class PositionApplicationModule {}
