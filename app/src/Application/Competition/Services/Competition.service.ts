import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Competition } from 'src/Domain/Competition/Model/Competition';
import { ICompetitionRepository } from 'src/Domain/Competition/Repositories/ICompetition.repository';
import { MODELS } from 'src/Utils/Constants/Enum/Models.Enum';
import CompetitionDto from '../Dto/Competition.dto';
import CompetitionCreateDto from '../Dto/CompetitionCreate.dto';
import { CompetitionMapper } from '../Mappers/Competition.mapper';
import { CompetitionHelper } from './Helper/Competition.helper';
import { ICompetitionService } from './Interfaces/ICompetition.service';

@Injectable()
export class CompetitionService implements ICompetitionService {
  constructor(
    @Inject('ICompetitionRepository')
    private readonly competitionRepository: ICompetitionRepository,
    @Inject('CompetitionHelper')
    private readonly competitionHelper: CompetitionHelper,
  ) {}
  async findAll(): Promise<CompetitionDto[]> {
    const competitionList: Competition[] = await this.competitionRepository.findAll();
    return CompetitionMapper.fromEntityListToDto(competitionList);
  }
  async findById(competitionId: number, showId = false): Promise<CompetitionDto> {
    const competition: Competition = await this.competitionRepository.findById(competitionId);
    if (this.competitionHelper.isNull(competition)) throw new NotFoundException();
    return CompetitionMapper.fromEntityToDto(competition, showId);
  }

  async createCompetition(competition: CompetitionCreateDto): Promise<CompetitionDto> {
    competition.competitionId = await this.competitionHelper.getNextSequenceValue(MODELS.COMPETITION);
    competition.typeCompetitionDto = await this.competitionHelper.getTypeCompetitionDto(competition.typeCompetitionId);
    const competitionToCreate: Competition = CompetitionMapper.fromDtoToEntity(competition);
    const competitionCreated: Competition = await this.competitionRepository.createCompetition(competitionToCreate);
    if (this.competitionHelper.isNull(competitionCreated)) throw new NotFoundException();
    return CompetitionMapper.fromEntityToDto(competitionCreated);
  }
}
