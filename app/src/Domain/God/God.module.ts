import { Module } from '@nestjs/common';
import { RegionModule } from '../Region/Region.module';

@Module({
  imports: [RegionModule],
})
export class GodModule {}
