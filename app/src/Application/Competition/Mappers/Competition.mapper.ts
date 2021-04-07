import { Competition } from '../../../Domain/Competition/Model/Competition';
import CompetitionDto from '../Dto/Competition.dto';
import CompetitionCreateDto from '../Dto/CompetitionCreate.dto';

export class CompetitionMapper {
  public static fromEntityToDto(competitionEntity: Competition, showId = false): CompetitionDto {
    const competitionDto: CompetitionDto = {
      competitionId: competitionEntity.competitionId,
      name: competitionEntity.name,
      description: competitionEntity.description,
      typeCompetition: competitionEntity.typeCompetition.name,
      totalCompetitors: competitionEntity.typeCompetition.totalCompetitors,
      typeCompetitionId: competitionEntity.typeCompetition.typeCompetitionId,
    };
    if (showId) competitionDto._id = competitionEntity._id;
    return competitionDto;
  }

  public static fromEntityListToDto(competitionEntityList: Competition[]): CompetitionDto[] {
    const competitionDtoList: CompetitionDto[] = [];
    competitionEntityList.forEach(x => {
      competitionDtoList.push(CompetitionMapper.fromEntityToDto(x));
    });
    return competitionDtoList;
  }

  public static fromDtoToEntity(competitionDto: CompetitionDto | CompetitionCreateDto): Competition {
    const competition: Competition = {
      competitionId: competitionDto.competitionId,
      name: competitionDto.name,
      description: competitionDto.description,
      typeCompetition: competitionDto.typeCompetitionDto,
      _id: competitionDto._id,
    };
    return competition;
  }
}
