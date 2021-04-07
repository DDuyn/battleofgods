import { Inject } from '@nestjs/common';
import RoundDto from 'src/Application/Round/Dto/Round.dto';
import { IRoundService } from 'src/Application/Round/Services/Interfaces/IRound.service';
import { UtilsService } from 'src/Application/Shared/Services/Utils.service';
import TypeCompetitionDto from 'src/Application/TypeCompetition/Dto/TypeCompetition.dto';
import { ITypeCompetitionService } from 'src/Application/TypeCompetition/Services/Interface/ITypeCompetition.service';
import { Points } from 'src/Domain/Points/Model/Points';
import { CONSTANTS } from 'src/Utils/Constants/Constants';
import PointsCreateDto from '../../Dto/PointsCreate.dto';
import PointsSearchDto from '../../Dto/PointsSearch.dto';
import PointsUpdateDto from '../../Dto/PointsUpdate.dto';
import { PointsMapper } from '../../Mappers/Points.mapper';
import { PointsSpecification } from '../Specifications/Points.specification';

export class PointsHelper extends UtilsService {
  constructor(
    @Inject('IRoundService') private readonly roundService: IRoundService,
    @Inject('ITypeCompetitionService') private readonly typeCompetitionService: ITypeCompetitionService,
  ) {
    super();
  }
  private async getRound(roundId: number): Promise<RoundDto> {
    return await this.roundService.findByRoundId(roundId, CONSTANTS.SHOWID);
  }
  private async getTypeCompetition(typeCompetitionId: number): Promise<TypeCompetitionDto> {
    return await this.typeCompetitionService.findById(typeCompetitionId, CONSTANTS.SHOWID);
  }

  async configurePoints(pointsDto: PointsCreateDto[]): Promise<Points[]> {
    const points: Points[] = [];
    await Promise.all(
      pointsDto.map(async dto => {
        dto.typeCompetitionDto = await this.getTypeCompetition(dto.typeCompetitionId);
        dto.roundDto = await this.getRound(dto.roundId);
        points.push(PointsMapper.fromDtoToEntity(dto));
      }),
    );
    return points;
  }

  async configurePointsSpecs(searchDto: PointsSearchDto): Promise<Points> {
    const specification: PointsSpecification = new PointsSpecification(searchDto);
    const roundDto: RoundDto = specification.FilterFields.has(specification.ROUNDID) ? await this.getRound(searchDto.roundId) : null;
    const typeCompetitionDto: TypeCompetitionDto = specification.FilterFields.has(specification.TYPECOMPETITIONID)
      ? await this.getTypeCompetition(searchDto.typeCompetitionId)
      : null;

    const pointsEntity: Points = {
      round: roundDto,
      typeCompetition: typeCompetitionDto,
      points: null,
    };
    return pointsEntity;
  }

  modifyPoints(pointsOrigin: Points[], pointsDto: PointsUpdateDto): Points {
    const pointsModified: Points = {
      points: pointsDto.points,
      typeCompetition: pointsOrigin[0].typeCompetition,
      round: pointsOrigin[0].round,
      _id: pointsOrigin[0]._id,
    };
    return pointsModified;
  }
}
