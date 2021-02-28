import { Injectable, Inject } from '@nestjs/common';
import { IHelperService } from 'src/Application/Utils/Services/Interfaces/IHelper.service';
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
    @Inject('IHelperService')
    private readonly helperService: IHelperService
  ) {}

  async findAll(showId: boolean): Promise<GodDto[]> {
    const godList: God[] = await this.godRepository.findAll();
    return !!godList ? GodMapper.fromEntityListToDto(godList, showId) : [];
  }

  async findByName(godName: string): Promise<GodDto> {
    return this.isGodNull(await this.godRepository.findByName(godName));
  }

  async findByGodId(godId: number, showId: boolean): Promise<GodDto> {
    return this.isGodNull(await this.godRepository.findByGodId(godId), showId);
  }

  async createGod(god: GodCreateDto): Promise<GodDto> {
    //TODO: Validaciones
    god.godId = await this.helperService.getNextSequenceValue(MODELS.GOD);
    return this.isGodNull(await this.godRepository.createGod(god));
  }

  private isGodNull(god: God, showId = false): GodDto {
    return !!god ? GodMapper.fromEntityToDto(god, showId) : new GodDto();
  }
}