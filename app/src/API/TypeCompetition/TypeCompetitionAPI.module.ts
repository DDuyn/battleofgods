import { Module } from '@nestjs/common';
import { TypeCompetitionApplicationModule } from '../../Application/TypeCompetition/TypeCompetitionApplication.module';
import { TypeCompetitionInfrastructureModule } from '../../Infrastructure/TypeCompetition/TypeCompetitionInfrastructure.module';
import { TypeCompetitionController } from './Controllers/TypeCompetition.controller';

@Module({
  controllers: [TypeCompetitionController],
  imports: [TypeCompetitionApplicationModule, TypeCompetitionInfrastructureModule],
})
export class TypeCompetitionAPIModule {}
