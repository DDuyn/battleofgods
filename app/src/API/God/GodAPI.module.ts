import { Module } from '@nestjs/common';
import { GodController } from './Controllers/God.controller';
import { GodService } from '../../Application/God/Services/God.service';
import { GodApplicationModule } from 'src/Application/God/GodApplication.module';


@Module({
  controllers: [GodController],
  imports: [GodApplicationModule],
  providers: [
    {
      provide: 'IGodService',
      useClass: GodService,
    },
  ],
  exports: [
    {
      provide: 'IGodService',
      useClass: GodService,
    },
  ],
})
export class GodAPIModule {}
