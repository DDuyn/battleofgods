import { Schema, Document } from 'mongoose';

export type Competition = {
  readonly _id?: string;
  readonly competitionId: number;
  readonly name: string;
  readonly description: string;
  readonly totalCompetitors: number;
}

export const CompetitionModel = new Schema({
  competitionId: { type: Number, required: true},
  name: { type: String, required: true},
  description: { type: String, required: true },
  totalCompetitors: { type: Number, required: true}
});

export interface ICompetitionEntity extends Document {
  readonly competitionId: number;
  readonly name: string;
  readonly description: string;
  readonly totalCompetitors: number;
}

