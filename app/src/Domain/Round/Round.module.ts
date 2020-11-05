import { Module } from '@nestjs/common';
import { RoundRepositoryModule } from 'src/Infrastructure/Round/RoundRepository.module';

@Module({
  imports: [RoundRepositoryModule],
})
export class RoundModule {}
