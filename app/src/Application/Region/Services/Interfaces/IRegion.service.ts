import RegionDto from '../../Dto/Region.dto';
import RegionCreateDto from '../../Dto/RegionCreate.dto';

export interface IRegionService {
  findAll(): Promise<RegionDto[]>;
  findById(regionId: number): Promise<RegionDto>;
  createRegion(regionDto: RegionCreateDto): Promise<RegionDto>;
}
