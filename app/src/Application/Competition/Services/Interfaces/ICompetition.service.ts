import CompetitionDto from '../../Dto/Competition.dto';

export interface ICompetitionService {
  findAll(): Promise<CompetitionDto[]>;
  findById(competitionId: number, showId: boolean): Promise<CompetitionDto>;
  createCompetition(competition: CompetitionDto): Promise<CompetitionDto>;
}
