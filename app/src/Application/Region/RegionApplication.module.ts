import { Module } from '@nestjs/common';
import { RegionModule } from 'src/Domain/Region/Region.module';
import { RegionInfrastructureModule } from 'src/Infrastructure/Region/RegionInfrastructure.module';
import { CounterApplicationModule } from '../Counter/CounterApplication.module';
import { SharedApplicationModule } from '../Shared/SharedApplication.module';
import { RegionHelper } from './Services/Helper/Region.helper';
import { RegionService } from './Services/Region.service';
@Module({
  imports: [RegionModule, RegionInfrastructureModule, SharedApplicationModule, CounterApplicationModule],
  providers: [
    {
      provide: 'IRegionService',
      useClass: RegionService,
    },
    {
      provide: 'RegionHelper',
      useClass: RegionHelper,
    },
  ],
  exports: [
    {
      provide: 'IRegionService',
      useClass: RegionService,
    },
  ],
})
export class RegionApplicationModule {}
