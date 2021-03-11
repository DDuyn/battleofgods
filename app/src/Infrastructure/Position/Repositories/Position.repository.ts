import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IPositionEntity } from 'src/Domain/Position/Model/Position';
import { IPositionRepository } from 'src/Domain/Position/Repositories/IPosition.repository';
import { UtilsHelperRepository } from '../../Utils/Utils.helper';

@Injectable()
export class PositionRepository implements IPositionRepository {
  constructor(
    @InjectModel('Position') private positionModel: Model<IPositionEntity>,
    @Inject('UtilsHelperRepository') private utilsHelper: UtilsHelperRepository,
  ) {}
  async findAll(): Promise<IPositionEntity[]> {
    return await this.positionModel.find();
  }
  async createPosition(position: IPositionEntity): Promise<IPositionEntity> {
    return await this.positionModel.create(position);
  }
  async findBySpecification(position: IPositionEntity): Promise<IPositionEntity[]> {
    const query = this.utilsHelper.convertEntityToQueryFilter(position);
    return await this.positionModel.find(query);
  }
}
