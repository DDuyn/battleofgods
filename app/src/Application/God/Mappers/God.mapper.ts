import { God } from 'src/Domain/God/Model/God';
import GodDto from '../Dto/God.dto';
import GodCreateDto from '../Dto/GodCreate.dto';
export class GodMapper {
  public static fromEntityToDto(godEntity: God, showId = false): GodDto {
    const godDto: GodDto = {
      godId: godEntity.godId,
      name: godEntity.name,
      history: godEntity.history,
      region: godEntity.origen.description,
      regionId: godEntity.origen.regionId,
      photo: godEntity.photo,
    };
    if (showId) {
      godDto._id = godEntity._id;
      godDto.regionDto = godEntity.origen;
    }
    return godDto;
  }

  public static fromEntityListToDto(godEntityList: God[], showId = false): GodDto[] {
    const godDtoList: GodDto[] = [];
    godEntityList.forEach(x => {
      godDtoList.push(GodMapper.fromEntityToDto(x, showId));
    });
    return godDtoList;
  }

  public static fromDtoToEntity(godDto: GodDto | GodCreateDto): God {
    const god: God = {
      godId: godDto.godId,
      name: godDto.name,
      history: godDto.history,
      origen: godDto.regionDto,
      photo: godDto.photo,
      _id: godDto._id,
    };

    return god;
  }
}
