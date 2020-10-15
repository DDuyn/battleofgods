import { Competition } from 'src/Domain/Competition/Model/Competition';
import CompetitionDto from '../Dto/Competition.dto';

export class CompetitionMapper {
  public static fromEntityToDto(
    competitionEntity: Competition,
  ): CompetitionDto {
    const godDto: CompetitionDto = {
      idCompetition: competitionEntity.idCompetition,
      description: competitionEntity.description,
    };
    return godDto;
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
