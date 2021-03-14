import RoundDto from '../../Dto/Round.dto';
import RoundCreateDto from '../../Dto/RoundCreate.dto';

export interface IRoundService {
  findAll(): Promise<RoundDto[]>;
  findByRoundId(roundId: number, showId: boolean): Promise<RoundDto>;
  createRound(round: RoundCreateDto): Promise<RoundDto>;
}
