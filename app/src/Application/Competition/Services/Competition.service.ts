import { Inject, Injectable } from '@nestjs/common';
import { Competition } from 'src/Domain/Competition/Model/Competition';
import { ICompetitionRepository } from 'src/Domain/Competition/Repositories/ICompetition.repository';
import CompetitionDto from '../Dto/Competition.dto';
import { CompetitionMapper } from '../Mappers/Competition.mapper';
import { ICompetitionService } from './Interfaces/ICompetitionService';

@Injectable()
export class CompetitionService implements ICompetitionService {
  constructor(
    @Inject('ICompetitionRepository')
    private readonly CompetitionRepository: ICompetitionRepository,
  ) {}
  async findAll(): Promise<CompetitionDto[]> {
    return CompetitionMapper.fromEntityListToDto(
      await this.CompetitionRepository.findAll(),
    );
  }
  async findById(competitionId: number): Promise<CompetitionDto> {
    const competition: Competition = await this.CompetitionRepository.findById(
      competitionId,
    );
    return !!competition
      ? CompetitionMapper.fromEntityToDto(competition)
      : new CompetitionDto();
  }

  async createCompetition(
    competition: CompetitionDto,
  ): Promise<CompetitionDto> {
    return await this.CompetitionRepository.createCompetition(competition);
  }
}
