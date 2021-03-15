import { Region } from 'src/Domain/Region/Model/Region';
import RegionDto from '../Dto/Region.dto';

export class RegionMapper {
  public static fromEntityToDto(regionEntity: Region, showId = false): RegionDto {
    const regionDto: RegionDto = {
      regionId: regionEntity.regionId,
      description: regionEntity.description,
    };
    if (showId) regionDto._id = regionEntity._id;
    return regionDto;
  }
  public static fromEntityListToDtoList(regionListEntity: Region[]): RegionDto[] {
    const regionListDto: RegionDto[] = [];
    regionListEntity.forEach(x => {
      regionListDto.push(RegionMapper.fromEntityToDto(x));
    });
    return regionListDto;
  }
}
