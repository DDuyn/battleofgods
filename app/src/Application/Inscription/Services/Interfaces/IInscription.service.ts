import InscriptionCreateDto from 'src/Application/Inscription/Dto/InscriptionCreate.dto';
import InscriptionDto from '../../Dto/Inscription.dto';
import InscriptionSearchDto from '../../Dto/InscriptionSearch.dto';

export interface IInscriptionService {
  findAll(): Promise<InscriptionDto[]>;
  createInscription(inscription: InscriptionCreateDto): Promise<InscriptionDto>;
  findInscriptionBySpecification(searchDto: InscriptionSearchDto): Promise<InscriptionDto[]>;
}
