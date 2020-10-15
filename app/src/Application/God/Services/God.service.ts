import { Injectable, Inject } from '@nestjs/common';
import { IGodRepository } from 'src/Domain/God/Repositories/IGod.repository';
import GodDto from '../Dto/God.dto';
import { GodMapper } from '../Mappers/God.mapper';
import { IGodService } from './Interfaces/IGod.service';

@Injectable()
export class GodService implements IGodService {
  constructor(
    @Inject('IGodRepository')
    private readonly GodRepository: IGodRepository,
  ) {}

  async findAll(): Promise<GodDto[]> {
    return GodMapper.fromEntityListToDto(await this.GodRepository.findAll());
  }

  async findByName(godName: string): Promise<GodDto> {
    return GodMapper.fromEntityToDto(
      await this.GodRepository.findByName(godName),
    );
  }
}
