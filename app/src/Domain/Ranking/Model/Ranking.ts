import { God } from "src/Domain/God/Model/God";
import { Schema, Document } from 'mongoose';
import { IGodEntity } from 'src/Domain/God/Model/God';

export const RankingModel = new Schema({
  god: { type: Schema.Types.ObjectId, ref: 'God', required: true, autopopulate: true },
  points: { type: Number, required: true, default: 0 },
  wins: { type: Number, required: true, default: 0 },
});

export interface IRankingEntity extends Document {
  readonly wins: number;
  readonly god: IGodEntity;
  readonly points: number;
}

export type Ranking = {
  points: number;
  readonly god: God;
  wins: number;
};
