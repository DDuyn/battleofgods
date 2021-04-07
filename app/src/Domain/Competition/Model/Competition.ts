import { Document, Schema } from 'mongoose';
import { ITypeCompetitionEntity, TypeCompetition } from '../../TypeCompetition/Model/TypeCompetition';

export type Competition = {
  readonly _id?: string;
  readonly competitionId: number;
  readonly name: string;
  readonly description: string;
  readonly typeCompetition: TypeCompetition;
};

export const CompetitionModel = new Schema({
  competitionId: { type: Number, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  typeCompetition: { type: Schema.Types.ObjectId, ref: 'TypeCompetition', required: true, autopopulate: true },
});

export interface ICompetitionEntity extends Document {
  readonly competitionId: number;
  readonly name: string;
  readonly description: string;
  readonly totalCompetitors: number;
  readonly typeCompetition: ITypeCompetitionEntity;
}
