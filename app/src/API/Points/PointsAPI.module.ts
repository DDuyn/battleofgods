import { Module } from '@nestjs/common';
import { PointsApplicationModule } from 'src/Application/Points/PointsApplication.module';
import { PointsInfrastructureModule } from 'src/Infrastructure/Points/PointsInfrastructure.module';
import { PointsController } from './Controllers/Points.controller';

@Module({
  controllers: [PointsController],
  imports: [PointsApplicationModule, PointsInfrastructureModule],
})
export class PointsApiModule {}
