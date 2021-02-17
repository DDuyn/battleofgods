import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CounterModel } from 'src/Domain/Counter/Model/Counter';
import { CounterRepository } from './Repositories/Counter.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Counter',
        schema: CounterModel,
      },
    ]),
  ],
  providers: [
    {
      provide: 'ICounterRepository',
      useClass: CounterRepository,
    },
  ],
  exports: [
    {
      provide: 'ICounterRepository',
      useClass: CounterRepository,
    },
  ],
})
export class CounterInfrastructureModule {}
