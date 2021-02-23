import { Schema, Document } from 'mongoose';

export type God = {
  readonly godId: number;
  readonly name: string;
  readonly origen: string;
  readonly history: string;
  readonly photo: string;
};

export const GodModel = new Schema({
  godId: { type: Number, required: true},
  name: { type: String, required: true },
  origen: { type: String, required: true },
  history: { type: String, required: true },
  photo: { type: String, required: true },
});

export interface IGodEntity extends Document {
  readonly godId: number;
  readonly name: string;
  readonly origen: string;
  readonly history: string;
  readonly photo: string;
}
