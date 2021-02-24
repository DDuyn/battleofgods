import { Inject, Injectable } from '@nestjs/common';
import { ICounterService } from 'src/Application/Utils/Services/Interfaces/ICounter.service';
import { IRoundRepository } from 'src/Domain/Round/Repositories/IRound.repository';
import { MODELS } from 'src/Utils/Constants/Enum/Models.Enum';
import RoundDto from '../Dto/Round.dto';
import RoundCreateDto from '../Dto/RoundCreate.dto';
import { RoundMapper } from '../Mappers/Round.mapper';
import { IRoundService } from './Interfaces/IRound.service';

@Injectable()
export class RoundService implements IRoundService {
  constructor(
    @Inject('IRoundRepository')
    private readonly roundRepository: IRoundRepository,
    @Inject('ICounterService')
    private readonly counterService: ICounterService
  ) {}

  async findAll(): Promise<RoundDto[]> {
    return RoundMapper.fromEntityListToDto(
      await this.roundRepository.findAll(),
    );
  }

  async findByDescription(roundDescription: string): Promise<RoundDto> {
    return RoundMapper.fromEntityToDto(
      await this.roundRepository.findByDescription(roundDescription),
    );
  }

  async createRound(round: RoundCreateDto): Promise<RoundDto> {
    round.roundId = await this.counterService.getNextSequenceValue(MODELS.ROUND);
    return RoundMapper.fromEntityToDto(
      await this.roundRepository.createRound(round),
    );
  }
}
