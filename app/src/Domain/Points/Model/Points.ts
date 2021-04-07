import { Document, Schema } from 'mongoose';
import { IRoundEntity, Round } from '../../Round/Model/Round';
import { ITypeCompetitionEntity, TypeCompetition } from '../../TypeCompetition/Model/TypeCompetition';

export type Points = {
  readonly _id?: string;
  readonly points: number;
  readonly typeCompetition: TypeCompetition;
  readonly round: Round;
};

export const PointsModel = new Schema({
  points: { type: Number, required: true },
  typeCompetition: { type: Schema.Types.ObjectId, ref: 'TypeCompetition', required: true, autopopulate: true },
  round: { type: Schema.Types.ObjectId, ref: 'Round', required: true, autopopulate: true },
});

export interface IPointsEntity extends Document {
  readonly points: number;
  readonly typeCompetition: ITypeCompetitionEntity;
  readonly round: IRoundEntity;
}
