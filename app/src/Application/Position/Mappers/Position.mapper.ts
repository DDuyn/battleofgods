import PositionDto from '../Dto/Position.dto';
import { Position } from 'src/Domain/Position/Model/Position';

export class PositionMapper {
  public static fromEntityToDto(positionEntity: Position): PositionDto {
    const positionDto: PositionDto = {
      godId: positionEntity.god.godId,
      godName: positionEntity.god.name,
      competitionId: positionEntity.competition.competitionId,
      competitionName: positionEntity.competition.name,
      seasonId: positionEntity.season.season,
      roundId: positionEntity.round.roundId,
      roundName: positionEntity.round.description,
      points: positionEntity.points,
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
}
