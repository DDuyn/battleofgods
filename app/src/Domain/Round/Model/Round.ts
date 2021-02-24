import { Schema, Document } from 'mongoose';

export const RoundModel = new Schema({
  roundId: { type: Number, required: true},
  description: { type: String, required: true },
});

export interface IRoundEntity extends Document {
  readonly description: string;
  readonly roundId: number;
}

export type Round = {
  readonly description: string;
  readonly roundId: number;
};
