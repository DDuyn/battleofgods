import { Inject, Injectable } from '@nestjs/common';
import { Competition } from '../Model/Competition';
import { ICompetitionRepository } from '../Repositories/ICompetition.repository';
import { ICompetitionService } from './Interfaces/ICompetition.service';

@Injectable()
export class CompetitionService implements ICompetitionService {
  constructor(
    @Inject('ICompetitionRepository')
    private readonly CompetitionRepository: ICompetitionRepository,
  ) {}
  findAll(): Promise<Competition[]> {
    return this.CompetitionRepository.findAll();
  }
  findById(competitionId: number): Promise<Competition> {
    return this.CompetitionRepository.findById(competitionId);
  }
}
