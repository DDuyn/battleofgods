import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { IPositionRepository } from 'src/Domain/Position/Repositories/IPosition.repository';
import { IPositionEntity } from 'src/Domain/Position/Model/Position';

@Injectable()
export class PositionRepository implements IPositionRepository {
  constructor(@InjectModel('Position') private positionModel: Model<IPositionEntity>) {}
  async findAll(): Promise<IPositionEntity[]> {
    return await this.positionModel.find();
  }
  async createPosition(position: IPositionEntity): Promise<IPositionEntity> {
    return await this.positionModel.create({ position });
  }
  async findByGod(position: IPositionEntity): Promise<IPositionEntity[]> {
    return await this.positionModel.find({ god: position.god._id });
  }
  async findByGodAndSeason(position: IPositionEntity): Promise<IPositionEntity[]> {
    return await this.positionModel.find({
      god: position.god._id,
      season: position.season._id,
    });
  }
}
