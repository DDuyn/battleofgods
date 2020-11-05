import { Module } from '@nestjs/common';
import { RoundModule } from 'src/Domain/Round/Round.module';
import { RoundRepositoryModule } from 'src/Infrastructure/Round/RoundRepository.module';
import { RoundController } from './Controllers/Round.controller';
import { RoundService } from './Services/Round.service';

@Module({
  controllers: [RoundController],
  imports: [RoundModule, RoundRepositoryModule],
  providers: [
    {
      provide: 'IRoundService',
      useClass: RoundService,
    },
  ],
  exports: [
    {
      provide: 'IRoundService',
      useClass: RoundService,
    },
  ],
})
export class RoundApplicationModule {}
