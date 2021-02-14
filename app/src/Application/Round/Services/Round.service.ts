import { Inject, Injectable } from '@nestjs/common';
import { IRoundRepository } from 'src/Domain/Round/Repositories/IRound.repository';
import RoundDto from '../Dto/Round.dto';
import { RoundMapper } from '../Mappers/Round.mapper';
import { IRoundService } from './Interfaces/IRound.service';

@Injectable()
export class RoundService implements IRoundService {
  constructor(
    @Inject('IRoundRepository')
    private readonly roundRepository: IRoundRepository,
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

  async createRound(roundList: RoundDto[]): Promise<RoundDto[]> {
    return RoundMapper.fromEntityListToDto(
      await this.roundRepository.createRound(roundList),
    );
  }
}
