import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Position } from 'src/Domain/Position/Model/Position';
import { IPositionRepository } from 'src/Domain/Position/Repositories/IPosition.repository';
import PositionDto from '../Dto/Position.dto';
import PositionCreateDto from '../Dto/PositionCreate.dto';
import PositionSearchDto from '../Dto/PositionSearch.dto';
import { PositionMapper } from '../Mappers/Position.mapper';
import { PositionHelper } from './Helper/Position.helper';
import { IPositionService } from './Interfaces/IPosition.service';

@Injectable()
export class PositionService implements IPositionService {
  constructor(
    @Inject('IPositionRepository') private readonly positionRepository: IPositionRepository,
    @Inject('PositionHelper') private readonly positionHelper: PositionHelper,
  ) {}
  async findAll(): Promise<PositionDto[]> {
    const positionList: Position[] = await this.positionRepository.findAll();
    return PositionMapper.fromEntityListToDto(positionList);
  }
  async createPosition(position: PositionCreateDto): Promise<PositionDto> {
    const positionEntityToCreate: Position = await this.positionHelper.createEntityPosition(position);
    const positionCreated: Position = await this.positionRepository.createPosition(positionEntityToCreate);
    if (this.positionHelper.isNull(positionCreated)) throw new NotFoundException();
    return PositionMapper.fromEntityToDto(positionCreated);
  }
  async findPositionByGod(godId: number): Promise<PositionDto[]> {
    const searchDto: PositionSearchDto = PositionMapper.configureSearchDto(godId);
    const positionByGod: Position = await this.positionHelper.configurePositionSpecs(searchDto);
    const positionListByGod: Position[] = await this.positionRepository.findByGod(positionByGod);
    if (this.positionHelper.isArrayNull(positionListByGod)) throw new NotFoundException();
    return PositionMapper.fromEntityListToDto(positionListByGod);
  }
  async findPositionByGodAndSeason(godId: number, seasonId: number): Promise<PositionDto[]> {
    const searchDto: PositionSearchDto = PositionMapper.configureSearchDto(godId, null, seasonId);
    const positionByGodAndSeason: Position = await this.positionHelper.configurePositionSpecs(searchDto);
    const positionListByGodAndSeason: Position[] = await this.positionRepository.findByGodAndSeason(positionByGodAndSeason);
    if (this.positionHelper.isArrayNull(positionListByGodAndSeason)) throw new NotFoundException();
    return PositionMapper.fromEntityListToDto(positionListByGodAndSeason);
  }
}
