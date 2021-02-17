import { Module } from '@nestjs/common';

@Module({
  exports: [CounterModule]
})
export class CounterModule {}
