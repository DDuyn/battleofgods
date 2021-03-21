import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IRankingEntity } from 'src/Domain/Ranking/Model/Ranking';
import { IRankingRepository } from 'src/Domain/Ranking/Repositories/IRanking.repository';

@Injectable()
export class RankingRepository implements IRankingRepository {
  constructor(@InjectModel('Ranking') private rankingModel: Model<IRankingEntity>) {}
  async findRankingByGod(ranking: IRankingEntity): Promise<IRankingEntity> {
    return await this.rankingModel.findOne({ god: ranking.god._id });
  }

  async findAll(): Promise<IRankingEntity[]> {
    return await this.rankingModel.find().sort({ points: 'desc', wins: 'desc', god: 'asc' });
  }

  async createRanking(listRanking: IRankingEntity[]): Promise<IRankingEntity[]> {
    return await this.rankingModel.create(listRanking);
  }

  async updateRankingByGod(rankingGod: IRankingEntity): Promise<IRankingEntity> {
    return await this.rankingModel.findOneAndUpdate({ god: rankingGod.god._id }, rankingGod, { new: true }).catch(err => {
      console.error('Error:', err);
      return null;
    });
  }
}
