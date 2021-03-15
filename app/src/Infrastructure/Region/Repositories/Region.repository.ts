import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IRegionEntity } from 'src/Domain/Region/Model/Region';
import { IRegionRepository } from 'src/Domain/Region/Repositories/IRegion.repository';

@Injectable()
export class RegionRepository implements IRegionRepository {
  constructor(@InjectModel('Region') private readonly regionModel: Model<IRegionEntity>) {}
  async findAll(): Promise<IRegionEntity[]> {
    return await this.regionModel.find();
  }
  async findById(regionId: number): Promise<IRegionEntity> {
    return await this.regionModel.findOne({ regionId: regionId });
  }
  async createRegion(regionEntity: IRegionEntity): Promise<IRegionEntity> {
    return await this.regionModel.create(regionEntity);
  }
}
