import { Injectable, Inject } from '@nestjs/common';
import { ICounterService } from 'src/Application/Utils/Services/Interfaces/ICounter.service';
import { God } from 'src/Domain/God/Model/God';
import { IGodRepository } from 'src/Domain/God/Repositories/IGod.repository';
import GodDto from '../Dto/God.dto';
import GodCreateDto from '../Dto/GodCreate.dto';
import { GodMapper } from '../Mappers/God.mapper';
import { IGodService } from './Interfaces/IGod.service';
import { MODELS } from '../../../Utils/Constants/Enum/Models.Enum';
@Injectable()
export class GodService implements IGodService {
  constructor(
    @Inject('IGodRepository')
    private readonly godRepository: IGodRepository,
    @Inject('ICounterService')
    private readonly counterService: ICounterService
  ) {}

  async findAll(isForRanking: boolean): Promise<GodDto[]> {
    const godList: God[] = await this.godRepository.findAll();
    return !!godList ? GodMapper.fromEntityListToDto(godList, isForRanking) : [];
  }

  async findByName(godName: string): Promise<GodDto> {
    return this.isGodNull(await this.godRepository.findByName(godName));
  }

  async createGod(god: GodCreateDto): Promise<GodDto> {
    //TODO: Validaciones
    god.godId = await this.counterService.getNextSequenceValue(MODELS.GOD);
    return this.isGodNull(await this.godRepository.createGod(god));
  }

  private isGodNull(god: God): GodDto {
    return !!god ? GodMapper.fromEntityToDto(god) : new GodDto();
  }
}