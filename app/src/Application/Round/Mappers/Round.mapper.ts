import { Round } from 'src/Domain/Round/Model/Round';
import RoundDto from '../Dto/Round.dto';

export class RoundMapper {
  public static fromEntityToDto(roundEntity: Round): RoundDto {
    const roundDto: RoundDto = {
      description: roundEntity.description,
    };
    return roundDto;
  }

  public static fromEntityListToDto(roundEntityList: Round[]): RoundDto[] {
    const roundDtoList: RoundDto[] = [];
    roundEntityList.forEach(x => {
      roundDtoList.push(RoundMapper.fromEntityToDto(x));
    });
    return roundDtoList;
  }
}
