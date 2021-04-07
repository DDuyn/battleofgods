import CompetitionDto from '../../Dto/Competition.dto';
import CompetitionCreateDto from '../../Dto/CompetitionCreate.dto';

export interface ICompetitionService {
  findAll(): Promise<CompetitionDto[]>;
  findById(competitionId: number, showId: boolean): Promise<CompetitionDto>;
  createCompetition(competition: CompetitionCreateDto): Promise<CompetitionDto>;
}
