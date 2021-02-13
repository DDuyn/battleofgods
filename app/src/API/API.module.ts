import { Module } from '@nestjs/common';
import { CompetitionAPIModule } from './Competition/CompetitionAPI.module';
import { GodAPIModule } from './God/GodAPI.module';

@Module({
  imports: [
    CompetitionAPIModule,
    GodAPIModule
  ],
  exports: [
    CompetitionAPIModule,
    GodAPIModule
  ],
})
export class APIModule {}
