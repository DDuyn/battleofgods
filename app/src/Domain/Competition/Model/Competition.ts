import { Schema, Document } from 'mongoose';

export type Competition = {
  readonly idCompetition: number;
  readonly description: string
}

export const CompetitionModel = new Schema({
  idCompetition: { type: Number, required: true},
  description: { type: String, required: true },
});

export interface ICompetitionEntity extends Document {
  readonly idCompetition: number;
  readonly description: string;
}

