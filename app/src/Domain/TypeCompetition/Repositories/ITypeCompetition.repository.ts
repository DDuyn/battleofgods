import { TypeCompetition } from '../Model/TypeCompetition';

export interface ITypeCompetitionRepository {
  findAll(): Promise<TypeCompetition[]>;
  findById(typeCompetitionId: number): Promise<TypeCompetition>;
  create(typeCompetition: TypeCompetition): Promise<TypeCompetition>;
}
