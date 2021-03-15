import { Region } from '../Model/Region';
export interface IRegionRepository {
  findAll(): Promise<Region[]>;
  createRegion(regionEntity: Region): Promise<Region>;
  findById(regionId: number): Promise<Region>;
}
