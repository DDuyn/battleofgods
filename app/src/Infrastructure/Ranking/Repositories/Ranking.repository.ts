import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IRankingRepository } from 'src/Domain/Ranking/Repositories/IRanking.repository';
import { GodModel } from 'src/Infrastructure/God/Entities/God.entity';
import { IRankingEntity } from '../Entities/Ranking.entity';

@Injectable()
export class RankingRepository implements IRankingRepository {
  constructor(
    @InjectModel('Ranking') private rankingModel: Model<IRankingEntity>,
  ) {}
  async findAll(): Promise<IRankingEntity[]> {
    const ranking = await this.rankingModel
    .find()
    .populate('gods', 'name', GodModel)
    .sort({ points: 'desc', wins: 'desc' });
    console.log(ranking)
    return await this.rankingModel
      .find()
      .populate('gods')
      .sort({ points: 'desc', wins: 'desc', god: 'asc' });
  }

  async createRanking(
    listRanking: IRankingEntity[],
  ): Promise<IRankingEntity[]> {
    return await this.rankingModel.create(listRanking);  
  }

  async createNewRanking(
    listRanking: IRankingEntity,
  ): Promise<IRankingEntity> {
    return await new this.rankingModel(listRanking).save();  
  }


  async updateRankingByGod(
    rankingGod: IRankingEntity,
  ): Promise<IRankingEntity> {
    return await this.rankingModel.findOneAndUpdate(
      { god: rankingGod.god._id },
      rankingGod,
      { new: true },
    ).catch((err) => {      
      console.error('Error:', err)
      return null;
    });
  }
}
