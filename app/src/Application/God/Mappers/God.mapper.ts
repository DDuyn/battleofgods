import { God } from 'src/Domain/God/Model/God';
import GodDto from '../Dto/God.dto';

export class GodMapper {
  public static fromEntityToDto(godEntity: God): GodDto {
    const godDto: GodDto = {
      godId: godEntity.godId,
      name: godEntity.name,
      history: godEntity.history,
      origen: godEntity.origen,
      photo: godEntity.photo,
    };
    return godDto;
  }

  public static fromEntityListToDto(godEntityList: God[]): GodDto[] {
    const godDtoList: GodDto[] = [];
    godEntityList.forEach(x => {
      godDtoList.push(GodMapper.fromEntityToDto(x));
    });
    return godDtoList;
  }

  public static fromDtoToEntity(godDto: GodDto): God {
    const god: God = {
      godId: godDto.godId,
      name: godDto.name,
      history: godDto.history,
      origen: godDto.origen,
      photo: godDto.photo      
    }
    return god;
  }
}
