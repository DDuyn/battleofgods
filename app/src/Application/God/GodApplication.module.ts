import { Module } from '@nestjs/common';
import { GodModule } from 'src/Domain/God/God.module';
import { GodInfrastructureModule } from 'src/Infrastructure/God/GodInfrastructure.module';
import { GodService } from './Services/God.service';

@Module({
  imports: [GodModule, GodInfrastructureModule],
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
export class GodApplicationModule {}
