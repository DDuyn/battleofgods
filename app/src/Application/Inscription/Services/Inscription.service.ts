import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import InscriptionCreateDto from 'src/Application/Inscription/Dto/InscriptionCreate.dto';
import { Inscription } from 'src/Domain/Inscription/Model/Inscription';
import { IInscriptionRepository } from 'src/Domain/Inscription/Repositories/IInscription.repository';
import InscriptionDto from '../Dto/Inscription.dto';
import InscriptionSearchDto from '../Dto/InscriptionSearch.dto';
import { InscriptionMapper } from '../Mappers/Inscription.mapper';
import { InscriptionHelper } from './Helper/Inscription.helper';
import { IInscriptionService } from './Interfaces/IInscription.service';

@Injectable()
export class InscriptionService implements IInscriptionService {
  constructor(
    @Inject('IInscriptionRepository') private readonly inscriptionRepository: IInscriptionRepository,
    @Inject('InscriptionHelper') private readonly inscriptionHelper: InscriptionHelper,
  ) {}
  async findAll(): Promise<InscriptionDto[]> {
    const inscriptionList: Inscription[] = await this.inscriptionRepository.findAll();
    if (this.inscriptionHelper.isArrayNull(inscriptionList)) throw new NotFoundException();
    return InscriptionMapper.fromEntityListToDto(inscriptionList);
  }
  async createInscription(inscriptionDtoList: InscriptionCreateDto[]): Promise<InscriptionDto[]> {
    const inscriptionList: Inscription[] = await this.inscriptionHelper.configureInscriptionList(inscriptionDtoList);
    const inscriptionListCreated: Inscription[] = await this.inscriptionRepository.createInscription(inscriptionList);
    return InscriptionMapper.fromEntityListToDto(inscriptionListCreated);
  }

  async findInscriptionBySpecification(searchDto: InscriptionSearchDto): Promise<InscriptionDto[]> {
    const inscriptionSpecs: Inscription = await this.inscriptionHelper.configurePositionSpecs(searchDto);
    const inscriptionList: Inscription[] = await this.inscriptionRepository.findInscriptionBySpecification(inscriptionSpecs);
    return InscriptionMapper.fromEntityListToDto(inscriptionList);
  }
}
