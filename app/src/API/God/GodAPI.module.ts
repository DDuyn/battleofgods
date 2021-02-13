import { Module } from '@nestjs/common';
import { GodController } from './Controllers/God.controller';
import { GodApplicationModule } from 'src/Application/God/GodApplication.module';
import { GodRepositoryModule } from '../../Infrastructure/God/GodRepository.module';


@Module({
  controllers: [GodController],
  imports: [GodApplicationModule, GodRepositoryModule],

})
export class GodAPIModule {}
