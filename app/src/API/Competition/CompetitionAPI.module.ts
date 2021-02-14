import { Module } from '@nestjs/common';
import { CompetitionController } from './Controllers/Competition.controller';
import { CompetitionApplicationModule } from '../../Application/Competition/CompetitionApplication.module';
import { CompetitionInfrastructureModule } from '../../Infrastructure/Competition/CompetitionInfrastructure.module';

@Module({
  controllers: [CompetitionController],
  imports: [CompetitionApplicationModule, CompetitionInfrastructureModule],
})
export class CompetitionAPIModule {}
