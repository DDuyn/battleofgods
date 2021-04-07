import { Inject, NotFoundException } from '@nestjs/common';
import { Region } from 'src/Domain/Region/Model/Region';
import { IRegionRepository } from 'src/Domain/Region/Repositories/IRegion.repository';
import { Models } from 'src/Utils/Constants/Enum/Models.Enum';
import RegionDto from '../Dto/Region.dto';
import RegionCreateDto from '../Dto/RegionCreate.dto';
import { RegionMapper } from '../Mappers/Region.mapper';
import { RegionHelper } from './Helper/Region.helper';
import { IRegionService } from './Interfaces/IRegion.service';

export class RegionService implements IRegionService {
  constructor(
    @Inject('IRegionRepository') private readonly regionRepository: IRegionRepository,
    @Inject('RegionHelper') private readonly regionHelper: RegionHelper,
  ) {}
  async findAll(): Promise<RegionDto[]> {
    const regionListEntity: Region[] = await this.regionRepository.findAll();
    if (this.regionHelper.isArrayNull(regionListEntity)) throw new NotFoundException();
    return RegionMapper.fromEntityListToDtoList(regionListEntity);
  }
  async findById(regionId: number, showId = false): Promise<RegionDto> {
    const regionEntity: Region = await this.regionRepository.findById(regionId);
    if (this.regionHelper.isNull(regionEntity)) throw new NotFoundException();
    return RegionMapper.fromEntityToDto(regionEntity, showId);
  }
  async createRegion(regionDto: RegionCreateDto): Promise<RegionDto> {
    regionDto.regionId = await this.regionHelper.getNextSequenceValue(Models.REGION);
    const regionEntity: Region = await this.regionRepository.createRegion(regionDto);
    if (this.regionHelper.isNull(regionEntity)) throw new NotFoundException();
    return RegionMapper.fromEntityToDto(regionEntity);
  }
}
