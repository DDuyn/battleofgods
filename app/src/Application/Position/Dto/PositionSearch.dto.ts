export default class PositionSearchDto {
  readonly godId?: number = null;
  readonly competitionId?: number = null;
  readonly seasonId?: number = null;
  readonly roundId?: number = null;

  constructor(god: number = null, competition: number = null, season: number = null, round: number = null) {
    this.godId = god;
    this.competitionId = competition;
    this.seasonId = season;
    this.roundId = round;
  }
}
