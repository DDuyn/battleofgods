import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Points } from 'src/Domain/Points/Model/Points';
import { IPointsRepository } from 'src/Domain/Points/Repositories/IPoints.repository';
import PointsDto from '../Dto/Points.dto';
import PointsCreateDto from '../Dto/PointsCreate.dto';
import PointsSearchDto from '../Dto/PointsSearch.dto';
import PointsUpdateDto from '../Dto/PointsUpdate.dto';
import { PointsMapper } from '../Mappers/Points.mapper';
import { PointsHelper } from './Helper/Points.helper';
import { IPointsService } from './Interfaces/IPoints.service';

@Injectable()
export class PointsService implements IPointsService {
  constructor(
    @Inject('IPointsRepository') private readonly pointsRepository: IPointsRepository,
    @Inject('PointsHelper') private readonly pointsHelper: PointsHelper,
  ) {}
  async findAll(): Promise<PointsDto[]> {
    const points: Points[] = await this.pointsRepository.findAll();
    if (this.pointsHelper.isArrayNull(points)) throw new NotFoundException();
    return PointsMapper.fromEntityListToDtoList(points);
  }
  async findBySpecification(searchDto: PointsSearchDto): Promise<PointsDto[]> {
    const pointsSpecs: Points = await this.pointsHelper.configurePointsSpecs(searchDto);
    const points: Points[] = await this.pointsRepository.findBySpecification(pointsSpecs);
    if (this.pointsHelper.isArrayNull(points)) throw new NotFoundException();
    return PointsMapper.fromEntityListToDtoList(points);
  }
  async create(pointsDto: PointsCreateDto[]): Promise<PointsDto[]> {
    const points: Points[] = await this.pointsHelper.configurePoints(pointsDto);
    const pointsCreated: Points[] = await this.pointsRepository.create(points);
    if (this.pointsHelper.isArrayNull(pointsCreated)) throw new NotFoundException();
    return PointsMapper.fromEntityListToDtoList(pointsCreated);
  }
  async update(roundId: number, typeCompetitionId: number, pointsDto: PointsUpdateDto): Promise<PointsDto> {
    const searchDto: PointsSearchDto = PointsMapper.configureSearchDto(typeCompetitionId, roundId);
    const specs: Points = await this.pointsHelper.configurePointsSpecs(searchDto);
    const points: Points[] = await this.pointsRepository.findBySpecification(specs);
    const pointsToModify: Points = this.pointsHelper.modifyPoints(points, pointsDto);
    const pointsModified: Points = await this.pointsRepository.update(pointsToModify);
    if (this.pointsHelper.isNull(pointsModified)) throw new NotFoundException();
    return PointsMapper.fromEntityToDto(pointsModified);
  }
}
