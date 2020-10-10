import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { IGodRepository } from 'src/Domain/God/Repositories/IGod.repository';
import { IGodEntity } from '../Entities/God.entity';

@Injectable()
export class GodRepository implements IGodRepository {
  constructor(@InjectModel('God') private GodModel: Model<IGodEntity>) {}
  async findAll(): Promise<IGodEntity[]> {
    return await this.GodModel.find();
  }

  async findByName(godName: string): Promise<IGodEntity> {
    return await this.GodModel.findOne({ name: godName });
  }
}
