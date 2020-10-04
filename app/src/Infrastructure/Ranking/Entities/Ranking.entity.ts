import { Schema, Document } from 'mongoose';

export const RankingModel = new Schema({
  god: { type: String, required: true },
  points: { type: Number, required: true, default: 0 },
  wins: { type: Number, required: true, default: 0 },
});
export interface IRankingEntity extends Document {
  readonly wins: number;
  readonly god: string;
  readonly points: number;
}
