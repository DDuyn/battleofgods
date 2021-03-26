import { Document, Schema } from 'mongoose';

export type TypeCompetition = {
  readonly _id?: string;
  readonly typeCompetitionId: number;
  readonly name: string;
  readonly description: string;
};

export const TypeCompetitionModel = new Schema({
  typeCompetitionId: { type: Number, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
});

export interface ITypeCompetitionEntity extends Document {
  readonly typeCompetitionId: number;
  readonly name: string;
  readonly description: string;
}
