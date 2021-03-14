import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IRoundEntity } from 'src/Domain/Round/Model/Round';
import { IRoundRepository } from 'src/Domain/Round/Repositories/IRound.repository';

@Injectable()
export class RoundRepository implements IRoundRepository {
  constructor(@InjectModel('Round') private roundModel: Model<IRoundEntity>) {}

  async findAll(): Promise<IRoundEntity[]> {
    return await this.roundModel.find();
  }

  async findByRoundId(roundId: number): Promise<IRoundEntity> {
    return await this.roundModel.findOne({ roundId: roundId });
  }

  async createRound(round: IRoundEntity): Promise<IRoundEntity> {
    return await this.roundModel.create(round);
  }
}
