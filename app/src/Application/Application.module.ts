import { Module } from '@nestjs/common';
import { DomainModule } from 'src/Domain/domain.module';
import { GodApplicationModule } from './God/GodApplication.module';

@Module({
  imports: [DomainModule, GodApplicationModule],
  exports: [GodApplicationModule],
})
export class ApplicationModule {}
