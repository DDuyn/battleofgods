import { Module } from '@nestjs/common';
import { GodRepositoryModule } from 'src/Infrastructure/God/GodRepository.module';
import { GodService } from './Services/God.service';

@Module({
  imports: [GodRepositoryModule],
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
export class GodModule {}
