import { Module } from '@nestjs/common';
import { PositionApplicationModule } from '../../Application/Position/PositionApplication.module';
import { PositionInfrastructureModule } from '../../Infrastructure/Position/PositionInfrastructure.module';
import { PositionController } from './Controllers/Position.controller';

@Module({
  controllers: [PositionController],
  imports: [PositionApplicationModule, PositionInfrastructureModule],
})
export class PositionAPIModule {}
