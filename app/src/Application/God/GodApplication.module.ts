import { Module } from '@nestjs/common';
import { GodModule } from 'src/Domain/God/God.module';
import { GodRepositoryModule } from 'src/Infrastructure/God/GodRepository.module';

@Module({
  imports: [GodModule, GodRepositoryModule],
  exports: [GodModule, GodRepositoryModule]
})
export class GodApplicationModule {}
