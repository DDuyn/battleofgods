import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RankingModel } from './Entities/Ranking.entity';
import { RankingRepository } from './Repositories/Ranking.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Ranking',
        schema: RankingModel,
      },
    ]),
  ],
  providers: [
    {
      provide: 'IRankingRepository',
      useClass: RankingRepository,
    },
  ],
  exports: [
    {
      provide: 'IRankingRepository',
      useClass: RankingRepository,
    },
  ],
})
export class RankingRepositoryModule {}
