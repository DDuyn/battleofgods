import { Position } from 'src/Domain/Position/Model/Position';
import PositionDto from '../Dto/Position.dto';
import PositionSearchDto from '../Dto/PositionSearch.dto';

export class PositionMapper {
  public static fromEntityToDto(positionEntity: Position): PositionDto {
    const positionDto: PositionDto = {
      godId: positionEntity.god.godId,
      godName: positionEntity.god.name,
      godPhoto: positionEntity.god.photo,
      competitionId: positionEntity.competition.competitionId,
      competitionName: positionEntity.competition.name,
      typeCompetition: positionEntity.competition.typeCompetition.name,
      typeCompetitionId: positionEntity.competition.typeCompetition.typeCompetitionId,
      seasonId: positionEntity.season.season,
      roundId: positionEntity.round.roundId,
      roundName: positionEntity.round.description,
      points: positionEntity.points,
      isWinner: positionEntity.isWinner,
    };

    return positionDto;
  }
  public static fromEntityListToDto(positionList: Position[]): PositionDto[] {
    const positionDto: PositionDto[] = [];
    positionList.forEach(position => {
      positionDto.push(PositionMapper.fromEntityToDto(position));
    });
    return positionDto;
  }

  public static configureSearchDto(
    godId: number = null,
    competitionId: number = null,
    seasonId: number = null,
    roundId: number = null,
  ): PositionSearchDto {
    const searchDto: PositionSearchDto = {
      godId: godId,
      competitionId: competitionId,
      seasonId: seasonId,
      roundId: roundId,
    };
    return searchDto;
  }
}
