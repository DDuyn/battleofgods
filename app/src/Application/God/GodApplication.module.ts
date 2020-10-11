import { Module } from '@nestjs/common';
import { GodModule } from 'src/Domain/God/God.module';
import { GodRepositoryModule } from 'src/Infrastructure/God/GodRepository.module';
import { GodController } from './Controllers/God.controller';
import { GodService } from './Services/God.service';

@Module({
  controllers: [GodController],
  imports: [GodModule, GodRepositoryModule],
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
