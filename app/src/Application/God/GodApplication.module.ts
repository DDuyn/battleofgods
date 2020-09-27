import { Module } from '@nestjs/common';
import { DomainModule } from 'src/Domain/domain.module';
import { GodController } from './Controllers/God.controller';

@Module({
  controllers: [GodController],
  imports: [DomainModule],
})
export class GodApplicationModule {}
