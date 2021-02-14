import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CompetitionModel } from 'src/Domain/Competition/Model/Competition';
import { CompetitionRepository } from './Repositories/Competition.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Competition',
        schema: CompetitionModel,
      },
    ]),
  ],
  providers: [
    {
      provide: 'ICompetitionRepository',
      useClass: CompetitionRepository,
    },
  ],
  exports: [
    {
      provide: 'ICompetitionRepository',
      useClass: CompetitionRepository,
    },
  ],
})
export class CompetitionInfrastructureModule {}
