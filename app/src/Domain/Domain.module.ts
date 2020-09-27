import { Module } from '@nestjs/common';
import { GodModule } from './God/God.module';

@Module({
  imports: [GodModule],
  exports: [GodModule],
})
export class DomainModule {}
