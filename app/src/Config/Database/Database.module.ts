import { Module } from '@nestjs/common';
import { DatabaseConnectionService } from './DatabaseConnection.service';

@Module({
  providers: [DatabaseConnectionService],
  exports: [DatabaseConnectionService],
})
export class DatabaseModule {}
