import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IRankingRepository } from 'src/Domain/Ranking/Repositories/IRanking.repository';
import { IRankingEntity } from '../Entities/Ranking.entity';

@Injectable()
export class RankingRepository implements IRankingRepository {
  constructor(
    @InjectModel('Ranking') private rankingModel: Model<IRankingEntity>,
  ) {}
  async findAll(): Promise<IRankingEntity[]> {
    return await this.rankingModel
      .find()
      .sort({ points: 'desc', wins: 'desc', god: 'asc' });
  }

  async createRanking(
    listRanking: IRankingEntity[],
  ): Promise<IRankingEntity[]> {
    return await this.rankingModel.create(listRanking);
  }

  async updateRankingByGod(
    rankingGod: IRankingEntity,
  ): Promise<IRankingEntity> {
    return await this.rankingModel.findOneAndUpdate(
      { god: rankingGod.god },
      rankingGod,
      { new: true },
    );
  }
}
