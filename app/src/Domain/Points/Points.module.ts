import { Module } from '@nestjs/common';
import { RoundModule } from '../Round/Round.module';
import { TypeCompetitionModule } from '../TypeCompetition/TypeCompetition.module';

@Module({
  imports: [RoundModule, TypeCompetitionModule],
})
export class PointsModule {}
