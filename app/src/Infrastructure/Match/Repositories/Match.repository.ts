import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { IMatchEntity } from 'src/Domain/Match/Model/Match';
import { IMatchRepository } from 'src/Domain/Match/Repositorires/IMatch.repository';
import { Model } from 'mongoose';

@Injectable()
export class MatchRepository implements IMatchRepository {
  constructor(@InjectModel('Match') private matchModel: Model<IMatchEntity>) {}
  async findMatchById(matchId: number): Promise<IMatchEntity> {
    return await this.matchModel.findOne({ matchId: matchId});
  }
  async findAll(): Promise<IMatchEntity[]> {
    return await this.matchModel.find().sort({ matchId: 'desc' });
  }
  async createMatch(match: IMatchEntity): Promise<IMatchEntity> {
    return await this.matchModel.create(match);
  }  
}
