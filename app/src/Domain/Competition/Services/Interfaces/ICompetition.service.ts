import { Competition } from '../../Model/Competition';

export interface ICompetitionService {
  findAll(): Promise<Competition[]>;
  findById(competitionId: number): Promise<Competition>;
}
