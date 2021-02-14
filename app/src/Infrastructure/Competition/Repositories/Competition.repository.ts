import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ICompetitionEntity } from 'src/Domain/Competition/Model/Competition';
import { ICompetitionRepository } from 'src/Domain/Competition/Repositories/ICompetition.repository';


@Injectable()
export class CompetitionRepository implements ICompetitionRepository {
  constructor(
    @InjectModel('Competition')
    private competitionModel: Model<ICompetitionEntity>,
  ) {}

  async findLastCompetition(): Promise<ICompetitionEntity> {
    return await this.competitionModel.findOne().sort({ idCompetition: 'desc' }).limit(1);
  }

  async findAll(): Promise<ICompetitionEntity[]> {
    return await this.competitionModel.find();
  }

  async findById(competitionId: number): Promise<ICompetitionEntity> {
    return await this.competitionModel.findOne({
      idCompetition: competitionId,
    });
  }

  async createCompetition(
    competition: ICompetitionEntity,
  ): Promise<ICompetitionEntity> {
    return await this.competitionModel.create(competition);
  }
}
