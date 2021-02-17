import { Inject, Injectable } from '@nestjs/common';
import { ICounterService } from 'src/Application/Utils/Services/Interfaces/ICounter.service';
import { Competition } from 'src/Domain/Competition/Model/Competition';
import { ICompetitionRepository } from 'src/Domain/Competition/Repositories/ICompetition.repository';
import { MODELS } from 'src/Utils/Constants/Constants';
import CompetitionDto from '../Dto/Competition.dto';
import CompetitionCreateDto from '../Dto/CompetitionCreate.dto';
import { CompetitionMapper } from '../Mappers/Competition.mapper';
import { ICompetitionService } from './Interfaces/ICompetition.service';

@Injectable()
export class CompetitionService implements ICompetitionService {
  constructor(
    @Inject('ICompetitionRepository')
    private readonly competitionRepository: ICompetitionRepository,
    @Inject('ICounterService')
    private readonly counterService: ICounterService
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
    competition.idCompetition = await this.counterService.getNextSequenceValue(MODELS.COMPETITION);
    return CompetitionMapper.fromEntityToDto(await this.competitionRepository.createCompetition(competition));
  }
}
