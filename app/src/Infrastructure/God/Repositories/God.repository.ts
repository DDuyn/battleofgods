import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { IGodRepository } from 'src/Domain/God/Repositories/IGod.repository';
import { IGodEntity } from 'src/Domain/God/Model/God';

@Injectable()
export class GodRepository implements IGodRepository {
  constructor(@InjectModel('God') private godModel: Model<IGodEntity>) {}
  async findAll(): Promise<IGodEntity[]> {
    return await this.godModel.find();
  }

  async findByName(godName: string): Promise<IGodEntity> {
    return await this.godModel.findOne({ name: godName });
  }

  async createGod(god: IGodEntity): Promise<IGodEntity> {
    return await this.godModel.create(god);
  }
}
