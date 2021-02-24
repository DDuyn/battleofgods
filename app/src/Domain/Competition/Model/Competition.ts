import { Schema, Document } from 'mongoose';

export type Competition = {
  readonly competitionId: number;
  readonly name: string;
  readonly description: string;
}

export const CompetitionModel = new Schema({
  competitionId: { type: Number, required: true},
  name: { type: String, required: true},
  description: { type: String, required: true },
});

export interface ICompetitionEntity extends Document {
  readonly competitionId: number;
  readonly name: string;
  readonly description: string;
}

