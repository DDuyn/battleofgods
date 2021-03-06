import PositionDto from '../../Dto/Position.dto';
import PositionCreateDto from '../../Dto/PositionCreate.dto';

export interface IPositionService {
  findAll(): Promise<PositionDto[]>;
  createPosition(position: PositionCreateDto): Promise<PositionDto>;
  findPositionByGod(godId: number): Promise<PositionDto[]>;
  findPositionByGodAndSeason(godId: number, seasonId: number): Promise<PositionDto[]>;
}
