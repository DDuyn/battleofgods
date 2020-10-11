import CompetitionDto from '../../Dto/Competition.dto';

export interface ICompetitionService {
  findAll(): Promise<CompetitionDto[]>;
  findById(competitionId: number): Promise<CompetitionDto>;
}
