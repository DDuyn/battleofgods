import { Injectable, Inject } from '@nestjs/common';
import { God } from 'src/Domain/God/Model/God';
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
    const godList: God[] = await this.GodRepository.findAll();
    return !!godList ? GodMapper.fromEntityListToDto(godList) : [];
  }

  async findByName(godName: string): Promise<GodDto> {
    return this.isGodNull(await this.GodRepository.findByName(godName));
  }

  async createGod(god: GodDto): Promise<GodDto> {
    return this.isGodNull(await this.GodRepository.createGod(god));
  }

  private isGodNull(god: God): GodDto {
    return !!god ? GodMapper.fromEntityToDto(god) : new GodDto();
  }
}
