import { Module } from '@nestjs/common';
import { CompetitionModule } from '../Competition/Competition.module';
import { GodModule } from '../God/God.module';
import { SeasonModule } from '../Season/Season.module';

@Module({
  imports: [GodModule, CompetitionModule, SeasonModule],
})
export class InscriptionModule {}
