import { Ranking } from 'src/Domain/Ranking/Model/Ranking';
import RankingDto from '../Dto/Ranking.dto';

export class RankingMapper {
  public static fromEntityToDto(rankingEntity: Ranking): RankingDto {
    const rankingDto: RankingDto = {       
      god: rankingEntity.god,
      points: rankingEntity.points,
      wins: rankingEntity.wins,
    };
    return rankingDto;
  }

  public static fromEntityListToDto(
    rankingEntityList: Ranking[],
  ): RankingDto[] {
    const rankingDtoList: RankingDto[] = [];
    rankingEntityList.forEach(x => {
      rankingDtoList.push(RankingMapper.fromEntityToDto(x));
    });
    return rankingDtoList;
  }

}
