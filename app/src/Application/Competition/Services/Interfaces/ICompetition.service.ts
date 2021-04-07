import { HttpStatus } from '@nestjs/common';
import CompetitionDto from '../../Dto/Competition.dto';
import CompetitionCreateDto from '../../Dto/CompetitionCreate.dto';
import CompetitionUpdateDto from '../../Dto/CompetitionUpdate.dto';

export interface ICompetitionService {
  findAll(): Promise<CompetitionDto[]>;
  findById(competitionId: number, showId: boolean): Promise<CompetitionDto>;
  createCompetition(competition: CompetitionCreateDto): Promise<CompetitionDto>;
  updateCompetition(competitionId: number, competition: CompetitionUpdateDto): Promise<CompetitionDto>;
  resetAllCompetitions(): Promise<HttpStatus>;
}
