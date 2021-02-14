import { Module } from '@nestjs/common';
import { RoundController } from './Controllers/Round.controller';
import { RoundApplicationModule } from '../../Application/Round/RoundApplication.module';
import { RoundInfrastructureModule } from '../../Infrastructure/Round/RoundInfrastructure.module';


@Module({
  controllers: [RoundController],
  imports: [RoundApplicationModule, RoundInfrastructureModule],

})
export class RoundAPIModule {}
