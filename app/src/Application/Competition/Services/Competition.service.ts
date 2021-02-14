import { Inject, Injectable } from '@nestjs/common';
import { Competition } from 'src/Domain/Competition/Model/Competition';
import { ICompetitionRepository } from 'src/Domain/Competition/Repositories/ICompetition.repository';
import CompetitionDto from '../Dto/Competition.dto';
import CompetitionCreateDto from '../Dto/CompetitionCreate.dto';
import { CompetitionMapper } from '../Mappers/Competition.mapper';
import { ICompetitionService } from './Interfaces/ICompetitionService';

@Injectable()
export class CompetitionService implements ICompetitionService {
  constructor(
    @Inject('ICompetitionRepository')
    private readonly competitionRepository: ICompetitionRepository,
  ) {}
  async findAll(): Promise<CompetitionDto[]> {
    return CompetitionMapper.fromEntityListToDto(
      await this.competitionRepository.findAll(),
    );
  }
  async findById(competitionId: number): Promise<CompetitionDto> {
    const competition: Competition = await this.competitionRepository.findById(
      competitionId,
    );
    return !!competition
      ? CompetitionMapper.fromEntityToDto(competition)
      : new CompetitionDto();
  }

  async createCompetition(
    competition: CompetitionCreateDto,
  ): Promise<CompetitionDto> {
    competition.idCompetition = (await this.competitionRepository.findLastCompetition()).idCompetition + 1;
    return CompetitionMapper.fromEntityToDto(await this.competitionRepository.createCompetition(competition));
  }
}
