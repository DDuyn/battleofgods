import { Module } from '@nestjs/common';
import { GodRepositoryModule } from './God/GodRepository.module';

@Module({
  imports: [GodRepositoryModule],
  exports: [GodRepositoryModule],
})
export class InfrastructureModule {}
