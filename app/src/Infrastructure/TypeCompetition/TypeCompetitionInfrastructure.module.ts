import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TypeCompetitionModel } from '../../Domain/TypeCompetition/Model/TypeCompetition';
import { TypeCompetitionRepository } from './Repositories/TypeCompetition.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'TypeCompetition',
        schema: TypeCompetitionModel,
      },
    ]),
  ],
  providers: [
    {
      provide: 'ITypeCompetitionRepository',
      useClass: TypeCompetitionRepository,
    },
  ],
  exports: [
    {
      provide: 'ITypeCompetitionRepository',
      useClass: TypeCompetitionRepository,
    },
  ],
})
export class TypeCompetitionInfrastructureModule {}
