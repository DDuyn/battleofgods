import TypeCompetitionDto from '../../Dto/TypeCompetition.dto';
import TypeCompetitionCreateDto from '../../Dto/TypeCompetitionCreate.dto';

export interface ITypeCompetitionService {
  findAll(): Promise<TypeCompetitionDto[]>;
  findById(typeCompetitionId: number, showId: boolean): Promise<TypeCompetitionDto>;
  create(typeCompetitionDto: TypeCompetitionCreateDto): Promise<TypeCompetitionDto>;
}
