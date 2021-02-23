import CompetitionDto from '../Dto/Competition.dto';
import { Competition } from '../../../Domain/Competition/Model/Competition';

export class CompetitionMapper {
  public static fromEntityToDto(
    competitionEntity: Competition,
  ): CompetitionDto {
    const competitionDto: CompetitionDto = {
      competitionId: competitionEntity.competitionId,
      description: competitionEntity.description,
    };
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
