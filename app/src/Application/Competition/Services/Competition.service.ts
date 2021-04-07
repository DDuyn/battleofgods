import { HttpStatus, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Competition } from 'src/Domain/Competition/Model/Competition';
import { ICompetitionRepository } from 'src/Domain/Competition/Repositories/ICompetition.repository';
import { Models } from 'src/Utils/Constants/Enum/Models.Enum';
import { CONSTANTS } from '../../../Utils/Constants/Constants';
import CompetitionDto from '../Dto/Competition.dto';
import CompetitionCreateDto from '../Dto/CompetitionCreate.dto';
import CompetitionUpdateDto from '../Dto/CompetitionUpdate.dto';
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
    competition.competitionId = await this.competitionHelper.getNextSequenceValue(Models.COMPETITION);
    competition.typeCompetitionDto = await this.competitionHelper.getTypeCompetitionDto(competition.typeCompetitionId);
    const competitionToCreate: Competition = CompetitionMapper.fromDtoToEntity(competition);
    const competitionCreated: Competition = await this.competitionRepository.createCompetition(competitionToCreate);
    if (this.competitionHelper.isNull(competitionCreated)) throw new NotFoundException();
    return CompetitionMapper.fromEntityToDto(competitionCreated);
  }

  async updateCompetition(competitionId: number, competitionDto: CompetitionUpdateDto): Promise<CompetitionDto> {
    const competition: Competition = await this.competitionRepository.findById(competitionId);
    const competitionToModify: Competition = this.competitionHelper.modifyCompetition(competition, competitionDto);
    const competitionModified: Competition = await this.competitionRepository.updateCompetition(competitionId, competitionToModify);
    if (this.competitionHelper.isNull(competitionModified)) throw new NotFoundException();
    return CompetitionMapper.fromEntityToDto(competitionModified);
  }

  async resetAllCompetitions(): Promise<HttpStatus> {
    const totalCompetitionsModified: number = await this.competitionRepository.resetCompetitions();
    if (totalCompetitionsModified === CONSTANTS.NUMBER_ZERO) throw new NotFoundException();

    return HttpStatus.OK;
  }
}
