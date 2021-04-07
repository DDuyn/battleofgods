import PointsDto from '../../Dto/Points.dto';
import PointsCreateDto from '../../Dto/PointsCreate.dto';
import PointsSearchDto from '../../Dto/PointsSearch.dto';
import PointsUpdateDto from '../../Dto/PointsUpdate.dto';

export interface IPointsService {
  findAll(): Promise<PointsDto[]>;
  findBySpecification(searchDto: PointsSearchDto): Promise<PointsDto[]>;
  create(pointsDto: PointsCreateDto[]): Promise<PointsDto[]>;
  update(roundId: number, typeCompetitionId: number, points: PointsUpdateDto): Promise<PointsDto>;
}
