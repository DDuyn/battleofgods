import { Schema, Document } from 'mongoose';

export const RoundModel = new Schema({
  description: { type: String, required: true },
});

export interface IRoundEntity extends Document {
  readonly description: string;
}

export type Round = {
  readonly _id?: string;
  readonly description: string;
};
