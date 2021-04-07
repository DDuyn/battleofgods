import { Match } from 'src/Domain/Match/Model/Match';
import MatchDto from '../Dto/Match.dto';

export class MatchMapper {
  public static fromEntityToDto(matchEntity: Match): MatchDto {
    const matchDto: MatchDto = {
      matchId: matchEntity.matchId,
      idFirstBattler: matchEntity.firstBattler.godId,
      firstBattler: matchEntity.firstBattler.name,
      firstBattlerPhoto: matchEntity.firstBattler.photo,
      idSecondBattler: matchEntity.secondBattler.godId,
      secondBattler: matchEntity.secondBattler.name,
      secondBattlerPhoto: matchEntity.secondBattler.photo,
      idCompetition: matchEntity.competition.competitionId,
      competition: matchEntity.competition.name,
      typeCompetition: matchEntity.competition.typeCompetition.name,
      typeCompetitionId: matchEntity.competition.typeCompetition.typeCompetitionId,
      idRound: matchEntity.round.roundId,
      round: matchEntity.round.description,
      idSeason: matchEntity.season.season,
      idWinner: matchEntity.winner.godId,
      winner: matchEntity.winner.name,
    };
    return matchDto;
  }

  public static fromEntityListToDto(matchEntityList: Match[]): MatchDto[] {
    const matchListDto: MatchDto[] = [];
    matchEntityList.forEach(x => {
      matchListDto.push(MatchMapper.fromEntityToDto(x));
    });
    return matchListDto;
  }
}
