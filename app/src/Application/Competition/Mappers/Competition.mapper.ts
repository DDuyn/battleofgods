import CompetitionDto from '../Dto/Competition.dto';
import { Competition } from '../../../Domain/Competition/Model/Competition';

export class CompetitionMapper {
  public static fromEntityToDto(
    competitionEntity: Competition,
    showId = false
  ): CompetitionDto {
    const competitionDto: CompetitionDto = {
      competitionId: competitionEntity.competitionId,
      name: competitionEntity.name,
      description: competitionEntity.description,
      totalCompetitors: competitionEntity.totalCompetitors
    };
    if (showId) competitionDto._id = competitionEntity._id;
    return competitionDto;
  }

  public static fromEntityListToDto(
    competitionEntityList: Competition[],
  ): CompetitionDto[] {
    const competitionDtoList: CompetitionDto[] = [];
    competitionEntityList.forEach(x => {
      competitionDtoList.push(CompetitionMapper.fromEntityToDto(x));
    });
    return competitionDtoList;
  }
}
