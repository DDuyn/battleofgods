import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { TypeCompetition } from 'src/Domain/TypeCompetition/Model/TypeCompetition';
import { ITypeCompetitionRepository } from 'src/Domain/TypeCompetition/Repositories/ITypeCompetition.repository';
import { MODELS } from 'src/Utils/Constants/Enum/Models.Enum';
import TypeCompetitionDto from '../Dto/TypeCompetition.dto';
import TypeCompetitionCreateDto from '../Dto/TypeCompetitionCreate.dto';
import TypeCompetitionUpdateDto from '../Dto/TypeCompetitionUpdate.dto';
import { TypeCompetitionMapper } from '../Mappers/TypeCompetition.mapper';
import { TypeCompetitionHelper } from './Helper/TypeCompetition.helper';
import { ITypeCompetitionService } from './Interface/ITypeCompetition.service';

@Injectable()
export class TypeCompetitionService implements ITypeCompetitionService {
  constructor(
    @Inject('ITypeCompetitionRepository') private readonly typeCompetitionRepository: ITypeCompetitionRepository,
    @Inject('TypeCompetitionHelper') private readonly typeCompetitionHelper: TypeCompetitionHelper,
  ) {}
  async findAll(): Promise<TypeCompetitionDto[]> {
    const typeCompetitionList: TypeCompetition[] = await this.typeCompetitionRepository.findAll();
    if (this.typeCompetitionHelper.isArrayNull(typeCompetitionList)) throw new NotFoundException();
    return TypeCompetitionMapper.fromEntityListToDtoList(typeCompetitionList);
  }
  async findById(typeCompetitionId: number, showId = false): Promise<TypeCompetitionDto> {
    const typeCompetition: TypeCompetition = await this.typeCompetitionRepository.findById(typeCompetitionId);
    if (this.typeCompetitionHelper.isNull(typeCompetition)) throw new NotFoundException();
    return TypeCompetitionMapper.fromEntityToDto(typeCompetition, showId);
  }
  async create(typeCompetitionDto: TypeCompetitionCreateDto): Promise<TypeCompetitionDto> {
    typeCompetitionDto.typeCompetitionId = await this.typeCompetitionHelper.getNextSequenceValue(MODELS.TYPECOMPETITION);
    const typeCompetitionEntity: TypeCompetition = await this.typeCompetitionRepository.create(typeCompetitionDto);
    if (this.typeCompetitionHelper.isNull(typeCompetitionEntity)) throw new NotFoundException();
    return TypeCompetitionMapper.fromEntityToDto(typeCompetitionEntity);
  }
  async update(typeCompetitionId: number, typeCompetitionDto: TypeCompetitionUpdateDto): Promise<TypeCompetitionDto> {
    const typeCompetition: TypeCompetition = await this.typeCompetitionRepository.findById(typeCompetitionId);
    const typeCompetitionToUpdate: TypeCompetition = this.typeCompetitionHelper.modifyDescription(
      typeCompetition,
      typeCompetitionDto.description,
    );
    const typeCompetitionUpdated: TypeCompetition = await this.typeCompetitionRepository.update(typeCompetitionId, typeCompetitionToUpdate);
    if (this.typeCompetitionHelper.isNull(typeCompetitionUpdated)) throw new NotFoundException();
    return TypeCompetitionMapper.fromEntityToDto(typeCompetitionUpdated);
  }
}
