import { Module } from '@nestjs/common';

@Module({
  exports: [CompetitionModule]
})
export class CompetitionModule {}
