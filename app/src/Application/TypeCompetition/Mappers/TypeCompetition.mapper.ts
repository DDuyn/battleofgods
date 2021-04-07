import { TypeCompetition } from '../../../Domain/TypeCompetition/Model/TypeCompetition';
import TypeCompetitionDto from '../Dto/TypeCompetition.dto';

export class TypeCompetitionMapper {
  public static fromEntityToDto(typeCompetitionEntity: TypeCompetition, showId = false): TypeCompetitionDto {
    const typeCompetitionDto: TypeCompetitionDto = {
      typeCompetitionId: typeCompetitionEntity.typeCompetitionId,
      name: typeCompetitionEntity.name,
      description: typeCompetitionEntity.description,
      totalCompetitors: typeCompetitionEntity.totalCompetitors,
    };
    if (showId) typeCompetitionDto._id = typeCompetitionEntity._id;
    return typeCompetitionDto;
  }
  public static fromEntityListToDtoList(typeCompetitionEntityList: TypeCompetition[], showId = false): TypeCompetitionDto[] {
    const typeCompetitionDtoList: TypeCompetitionDto[] = [];
    typeCompetitionEntityList.forEach(x => typeCompetitionDtoList.push(TypeCompetitionMapper.fromEntityToDto(x, showId)));
    return typeCompetitionDtoList;
  }
}
