import { Round } from 'src/Domain/Round/Model/Round';
import RoundDto from '../Dto/Round.dto';

export class RoundMapper {
  public static fromEntityToDto(roundEntity: Round, showId = false): RoundDto {
    const roundDto: RoundDto = {
      roundId: roundEntity.roundId,
      description: roundEntity.description,
    };

    if (showId) roundDto._id = roundEntity._id;
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
