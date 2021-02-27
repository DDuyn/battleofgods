import { Schema } from 'mongoose';
import { Competition, ICompetitionEntity } from 'src/Domain/Competition/Model/Competition';
import { God, IGodEntity } from 'src/Domain/God/Model/God';
import { Round, IRoundEntity } from 'src/Domain/Round/Model/Round';
import { Season, ISeasonEntity } from 'src/Domain/Season/Model/Season';


export type Match = {
    readonly matchId: number;
    readonly firstBattler: God;    
    readonly secondBatller: God;
    readonly competition: Competition;
    readonly round: Round;
    readonly season: Season;  
    readonly winner: God;
  };
  
  export const MatchModel = new Schema({
    matchId: { type: Number, required: true},
    firstBattler: { type: Schema.Types.ObjectId, ref: 'God', required: true, autopopulate: true},
    secondBattler: { type: Schema.Types.ObjectId, ref: 'God', required: true, autopopulate: true},
    competition: { type: Schema.Types.ObjectId, ref: 'Competition', required: true, autopopulate: true},
    round: { type: Schema.Types.ObjectId, ref: 'Round', required: true, autopopulate: true},
    season: { type: Schema.Types.ObjectId, ref: 'Season', required: true, autopopulate: true},
    winner: { type: Schema.Types.ObjectId, ref: 'God', required: true, autopopulate: true}
  });

  export interface IMatchEntity extends Document {
    readonly matchId: number;
    readonly firstBattler: IGodEntity,
    readonly secondBattler: IGodEntity,
    readonly competition: ICompetitionEntity,
    readonly round: IRoundEntity,
    readonly season: ISeasonEntity,
    readonly winner: IGodEntity
  }