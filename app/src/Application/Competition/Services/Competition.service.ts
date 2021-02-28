import { Inject, Injectable } from '@nestjs/common';
import { IHelperService } from 'src/Application/Utils/Services/Interfaces/IHelper.service';
import { Competition } from 'src/Domain/Competition/Model/Competition';
import { ICompetitionRepository } from 'src/Domain/Competition/Repositories/ICompetition.repository';
import { MODELS } from 'src/Utils/Constants/Enum/Models.Enum';
import CompetitionDto from '../Dto/Competition.dto';
import CompetitionCreateDto from '../Dto/CompetitionCreate.dto';
import { CompetitionMapper } from '../Mappers/Competition.mapper';
import { ICompetitionService } from './Interfaces/ICompetition.service';

@Injectable()
export class CompetitionService implements ICompetitionService {
  constructor(
    @Inject('ICompetitionRepository')
    private readonly competitionRepository: ICompetitionRepository,
    @Inject('IHelperService')
    private readonly helperService: IHelperService
  ) {}
  async findAll(): Promise<CompetitionDto[]> {
    return CompetitionMapper.fromEntityListToDto(
      await this.competitionRepository.findAll(),
    );
  }
  async findById(competitionId: number, showId: boolean): Promise<CompetitionDto> {
    const competition: Competition = await this.competitionRepository.findById(
      competitionId,
    );
    return !!competition
      ? CompetitionMapper.fromEntityToDto(competition, showId)
      : new CompetitionDto();
  }

  async createCompetition(
    competition: CompetitionCreateDto,
  ): Promise<CompetitionDto> {
    competition.competitionId = await this.helperService.getNextSequenceValue(MODELS.COMPETITION);
    return CompetitionMapper.fromEntityToDto(await this.competitionRepository.createCompetition(competition));
  }
}
