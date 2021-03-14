import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Round } from 'src/Domain/Round/Model/Round';
import { IRoundRepository } from 'src/Domain/Round/Repositories/IRound.repository';
import { MODELS } from 'src/Utils/Constants/Enum/Models.Enum';
import RoundDto from '../Dto/Round.dto';
import RoundCreateDto from '../Dto/RoundCreate.dto';
import { RoundMapper } from '../Mappers/Round.mapper';
import { RoundHelper } from './Helper/Round.helper';
import { IRoundService } from './Interfaces/IRound.service';

@Injectable()
export class RoundService implements IRoundService {
  constructor(
    @Inject('IRoundRepository')
    private readonly roundRepository: IRoundRepository,
    @Inject('RoundHelper')
    private readonly roundHelper: RoundHelper,
  ) {}

  async findAll(): Promise<RoundDto[]> {
    const roundList: Round[] = await this.roundRepository.findAll();
    if (this.roundHelper.isArrayNull(roundList)) throw new NotFoundException();
    return RoundMapper.fromEntityListToDto(roundList);
  }

  async findByRoundId(roundId: number, showId = false): Promise<RoundDto> {
    const round: Round = await this.roundRepository.findByRoundId(roundId);
    if (this.roundHelper.isNull(round)) throw new NotFoundException();
    return RoundMapper.fromEntityToDto(round, showId);
  }

  async createRound(round: RoundCreateDto): Promise<RoundDto> {
    round.roundId = await this.roundHelper.getNextSequenceValue(MODELS.ROUND);
    return RoundMapper.fromEntityToDto(await this.roundRepository.createRound(round));
  }
}
