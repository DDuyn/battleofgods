import { Module } from '@nestjs/common';
import { GodInfrastructureModule } from 'src/Infrastructure/God/GodInfrastructure.module';

@Module({
  imports: [GodInfrastructureModule],
})
export class GodModule {}
