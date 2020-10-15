import { Module } from '@nestjs/common';
import { GodRepositoryModule } from 'src/Infrastructure/God/GodRepository.module';

@Module({
  imports: [GodRepositoryModule],
})
export class GodModule {}
