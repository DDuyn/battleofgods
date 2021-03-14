import { Round } from '../Model/Round';

export interface IRoundRepository {
  findAll(): Promise<Round[]>;
  findByRoundId(roundId: number): Promise<Round>;
  createRound(round: Round): Promise<Round>;
}
