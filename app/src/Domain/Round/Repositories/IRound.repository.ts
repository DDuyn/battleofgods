import { Round } from '../Model/Round';

export interface IRoundRepository {
  findAll(): Promise<Round[]>;
  findByDescription(roundDescription: string): Promise<Round>;
  createRound(roundList: Round[]): Promise<Round[]>;
}
