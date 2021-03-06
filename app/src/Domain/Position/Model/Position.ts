import { Document, Schema } from 'mongoose';
import { Competition, ICompetitionEntity } from 'src/Domain/Competition/Model/Competition';
import { God, IGodEntity } from 'src/Domain/God/Model/God';
import { IRoundEntity, Round } from 'src/Domain/Round/Model/Round';
import { ISeasonEntity, Season } from 'src/Domain/Season/Model/Season';

export type Position = {
  readonly _id?: string;
  readonly god?: God;
  readonly competition?: Competition;
  readonly season?: Season;
  readonly round?: Round;
  readonly points?: number;
};

export const PositionModel = new Schema({
  god: { type: Schema.Types.ObjectId, ref: 'God', required: true, autopopulate: true },
  competition: { type: Schema.Types.ObjectId, ref: 'Competition', required: true, autopopulate: true },
  season: { type: Schema.Types.ObjectId, ref: 'Season', required: true, autopopulate: true },
  round: { type: Schema.Types.ObjectId, ref: 'Round', required: true, autopopulate: true },
  points: { type: Number, required: true, default: 0 },
});

export interface IPositionEntity extends Document {
  readonly god: IGodEntity;
  readonly competition: ICompetitionEntity;
  readonly season: ISeasonEntity;
  readonly round: IRoundEntity;
  readonly points: number;
}
