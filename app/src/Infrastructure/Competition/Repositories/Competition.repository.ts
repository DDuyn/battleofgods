import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ICompetitionRepository } from 'src/Domain/Competition/Repositories/ICompetition.repository';
import { ICompetitionEntity } from '../Entities/Competition.entity';

@Injectable()
export class CompetitionRepository implements ICompetitionRepository {
  constructor(
    @InjectModel('Competition')
    private competitionModel: Model<ICompetitionEntity>,
  ) {}

  async findAll(): Promise<ICompetitionEntity[]> {
    return this.competitionModel.find();
  }

  async findById(competitionId: number): Promise<ICompetitionEntity> {
    return this.competitionModel.findOne({ idCompetition: competitionId });
  }
}
