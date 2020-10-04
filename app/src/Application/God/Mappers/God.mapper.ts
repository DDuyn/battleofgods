import { God } from 'src/Domain/God/Model/God';
import GodDto from '../Dto/God.dto';

export class GodMapper {
  public static fromEntityToDto(godEntity: God): GodDto {
    const godDto: GodDto = {
      id: godEntity.id,
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
}
