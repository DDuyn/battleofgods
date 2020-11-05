import RoundDto from '../../Dto/Round.dto';

export interface IRoundService {
  findAll(): Promise<RoundDto[]>;
  findByDescription(roundDescription: string): Promise<RoundDto>;
  createRound(roundList: RoundDto[]): Promise<RoundDto[]>;
}
