import { Module } from '@nestjs/common';
import { GodController } from './Controllers/God.controller';
import { GodApplicationModule } from 'src/Application/God/GodApplication.module';
import { GodInfrastructureModule } from '../../Infrastructure/God/GodInfrastructure.module';


@Module({
  controllers: [GodController],
  imports: [GodApplicationModule, GodInfrastructureModule],

})
export class GodAPIModule {}
