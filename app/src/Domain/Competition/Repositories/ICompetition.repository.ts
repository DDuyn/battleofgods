import { Competition } from '../Model/Competition';

export interface ICompetitionRepository {
  findAll(): Promise<Competition[]>;
  findById(competitionId: number): Promise<Competition>;
  createCompetition(competition: Competition): Promise<Competition>;
  findLastCompetition(): Promise<Competition>;
  updateCompetition(competitionId: number, competition: Competition): Promise<Competition>;
}
