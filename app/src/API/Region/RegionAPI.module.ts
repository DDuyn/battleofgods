import { Module } from '@nestjs/common';
import { RegionApplicationModule } from 'src/Application/Region/RegionApplication.module';
import { RegionInfrastructureModule } from 'src/Infrastructure/Region/RegionInfrastructure.module';
import { RegionController } from './Controllers/Region.controller';

@Module({
  controllers: [RegionController],
  imports: [RegionApplicationModule, RegionInfrastructureModule],
})
export class RegionAPIModule {}
