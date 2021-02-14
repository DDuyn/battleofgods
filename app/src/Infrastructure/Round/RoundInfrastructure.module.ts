import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RoundRepository } from './Repositories/Round.repository';
import { RoundModel } from '../../Domain/Round/Model/Round';

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
export class RoundInfrastructureModule {}
