import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GodModel } from 'src/Domain/God/Model/God';
import { GodRepository } from './Repositories/God.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'God',
        schema: GodModel,
      },
    ]),
  ],
  providers: [
    {
      provide: 'IGodRepository',
      useClass: GodRepository,
    },
  ],
  exports: [
    {
      provide: 'IGodRepository',
      useClass: GodRepository,
    },
  ],
})
export class GodInfrastructureModule {}
