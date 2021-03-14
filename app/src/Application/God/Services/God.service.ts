import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { God } from 'src/Domain/God/Model/God';
import { IGodRepository } from 'src/Domain/God/Repositories/IGod.repository';
import { MODELS } from '../../../Utils/Constants/Enum/Models.Enum';
import GodDto from '../Dto/God.dto';
import GodCreateDto from '../Dto/GodCreate.dto';
import { GodMapper } from '../Mappers/God.mapper';
import { GodHelper } from './Helper/God.helper';
import { IGodService } from './Interfaces/IGod.service';

@Injectable()
export class GodService implements IGodService {
  constructor(
    @Inject('IGodRepository')
    private readonly godRepository: IGodRepository,
    @Inject('GodHelper')
    private readonly godHelper: GodHelper,
  ) {}

  async findAll(showId: boolean): Promise<GodDto[]> {
    const godList: God[] = await this.godRepository.findAll();
    return !!godList ? GodMapper.fromEntityListToDto(godList, showId) : [];
  }

  async findByName(godName: string): Promise<GodDto> {
    const godEntity: God = await this.godRepository.findByName(godName);
    if (this.godHelper.isNull(godEntity)) throw new NotFoundException();
    return GodMapper.fromDtoToEntity(godEntity);
  }

  async findByGodId(godId: number, showId: boolean): Promise<GodDto> {
    const godEntity: God = await this.godRepository.findByGodId(godId);
    if (this.godHelper.isNull(godEntity)) throw new NotFoundException();
    return GodMapper.fromEntityToDto(godEntity, showId);
  }

  async createGod(god: GodCreateDto): Promise<GodDto> {
    //TODO: Validaciones
    god.godId = await this.godHelper.getNextSequenceValue(MODELS.GOD);
    const godEntity: God = await this.godRepository.createGod(god);
    if (this.godHelper.isNull(godEntity)) throw new NotFoundException();
    return GodMapper.fromDtoToEntity(godEntity);
  }
}
