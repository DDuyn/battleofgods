import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RoundModel } from './Entities/Round.repository';
import { RoundRepository } from './Repositories/Round.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Round',
        schema: RoundModel,
      },
    ]),
  ],
  providers: [
    {
      provide: 'IRoundRepository',
      useClass: RoundRepository,
    },
  ],
  exports: [
    {
      provide: 'IRoundRepository',
      useClass: RoundRepository,
    },
  ],
})
export class RoundRepositoryModule {}
