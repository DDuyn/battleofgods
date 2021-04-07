import { Points } from 'src/Domain/Points/Model/Points';
import PointsDto from '../Dto/Points.dto';
import PointsCreateDto from '../Dto/PointsCreate.dto';
import PointsSearchDto from '../Dto/PointsSearch.dto';

export class PointsMapper {
  public static fromEntityToDto(pointsEntity: Points): PointsDto {
    const pointsDto: PointsDto = {
      points: pointsEntity.points,
      typeCompetitionId: pointsEntity.typeCompetition.typeCompetitionId,
      typeCompetitionName: pointsEntity.typeCompetition.name,
      roundId: pointsEntity.round.roundId,
      roundName: pointsEntity.round.description,
    };
    return pointsDto;
  }

  public static fromEntityListToDtoList(pointsEntityList: Points[]): PointsDto[] {
    const pointsDto: PointsDto[] = [];
    pointsEntityList.forEach(x => {
      pointsDto.push(PointsMapper.fromEntityToDto(x));
    });
    return pointsDto;
  }

  public static fromDtoToEntity(pointsDto: PointsCreateDto): Points {
    const points: Points = {
      round: pointsDto.roundDto,
      typeCompetition: pointsDto.typeCompetitionDto,
      points: pointsDto.points,
    };
    return points;
  }

  public static configureSearchDto(typeCompetitionId: number = null, roundId: number = null): PointsSearchDto {
    const searchDto: PointsSearchDto = {
      roundId: roundId,
      typeCompetitionId: typeCompetitionId,
    };
    return searchDto;
  }
}
