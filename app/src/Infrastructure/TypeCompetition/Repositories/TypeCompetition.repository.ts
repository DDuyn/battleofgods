import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ITypeCompetitionEntity } from 'src/Domain/TypeCompetition/Model/TypeCompetition';
import { ITypeCompetitionRepository } from '../../../Domain/TypeCompetition/Repositories/ITypeCompetition.repository';

@Injectable()
export class TypeCompetitionRepository implements ITypeCompetitionRepository {
  constructor(@InjectModel('TypeCompetition') private readonly typeCompetitionModel: Model<ITypeCompetitionEntity>) {}
  async findAll(): Promise<ITypeCompetitionEntity[]> {
    return await this.typeCompetitionModel.find();
  }
  async findById(typeCompetitionId: number): Promise<ITypeCompetitionEntity> {
    return await this.typeCompetitionModel.findOne({ typeCompetitionId: typeCompetitionId });
  }
  async create(typeCompetition: ITypeCompetitionEntity): Promise<ITypeCompetitionEntity> {
    return await this.typeCompetitionModel.create(typeCompetition);
  }
  async update(typeCompetitionId: number, typeCompetition: ITypeCompetitionEntity): Promise<ITypeCompetitionEntity> {
    return await this.typeCompetitionModel.findOneAndUpdate({ typeCompetitionId: typeCompetitionId }, typeCompetition, { new: true });
  }
}
