import TypeCompetitionDto from '../../Dto/TypeCompetition.dto';
import TypeCompetitionCreateDto from '../../Dto/TypeCompetitionCreate.dto';
import TypeCompetitionUpdateDto from '../../Dto/TypeCompetitionUpdate.dto';

export interface ITypeCompetitionService {
  findAll(): Promise<TypeCompetitionDto[]>;
  findById(typeCompetitionId: number, showId: boolean): Promise<TypeCompetitionDto>;
  create(typeCompetitionDto: TypeCompetitionCreateDto): Promise<TypeCompetitionDto>;
  update(typeCompetitionId: number, typeCompetitionDto: TypeCompetitionUpdateDto): Promise<TypeCompetitionDto>;
}
