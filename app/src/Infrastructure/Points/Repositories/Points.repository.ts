import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IPointsEntity } from 'src/Domain/Points/Model/Points';
import { IPointsRepository } from 'src/Domain/Points/Repositories/IPoints.repository';
import { UtilsHelperRepository } from 'src/Infrastructure/Utils/Utils.helper';

@Injectable()
export class PointsRepository implements IPointsRepository {
  constructor(
    @InjectModel('Points') private readonly pointsModel: Model<IPointsEntity>,
    @Inject('UtilsHelperRepository') private readonly utilsHelper: UtilsHelperRepository,
  ) {}
  async findBySpecification(points: IPointsEntity): Promise<IPointsEntity[]> {
    const query = this.utilsHelper.convertEntityToQueryFilter(points);
    return await this.pointsModel.find(query);
  }
  async findAll(): Promise<IPointsEntity[]> {
    return await this.pointsModel.find();
  }
  async create(points: IPointsEntity[]): Promise<IPointsEntity[]> {
    return await this.pointsModel.create(points);
  }
  async update(points: IPointsEntity): Promise<IPointsEntity> {
    return await this.pointsModel.findOneAndUpdate({ _id: points._id }, points, { new: true });
  }
}
