import RoundDto from '../../Dto/Round.dto';
import RoundCreateDto from '../../Dto/RoundCreate.dto';

export interface IRoundService {
  findAll(): Promise<RoundDto[]>;
  findByDescription(roundDescription: string): Promise<RoundDto>;
  findByRoundId(roundId: number): Promise<RoundDto>;
  createRound(round: RoundCreateDto): Promise<RoundDto>;
}
