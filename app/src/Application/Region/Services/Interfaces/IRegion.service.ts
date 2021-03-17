import RegionDto from '../../Dto/Region.dto';
import RegionCreateDto from '../../Dto/RegionCreate.dto';

export interface IRegionService {
  findAll(): Promise<RegionDto[]>;
  findById(regionId: number, showId: boolean): Promise<RegionDto>;
  createRegion(regionDto: RegionCreateDto): Promise<RegionDto>;
}
