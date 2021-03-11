import { Document, Schema } from 'mongoose';
import { Competition, ICompetitionEntity } from 'src/Domain/Competition/Model/Competition';
import { God, IGodEntity } from 'src/Domain/God/Model/God';
import { ISeasonEntity, Season } from 'src/Domain/Season/Model/Season';

export type Inscription = {
  readonly god?: God;
  readonly competition?: Competition;
  readonly season?: Season;
};

export const InscriptionModel = new Schema({
  god: { type: Schema.Types.ObjectId, ref: 'God', required: true, autopopulate: true },
  competition: { type: Schema.Types.ObjectId, ref: 'Competition', required: true, autopopulate: true },
  season: { type: Schema.Types.ObjectId, ref: 'Season', required: true, autopopulate: true },
});

export interface IInscriptionEntity extends Document {
  readonly god: IGodEntity;
  readonly competition: ICompetitionEntity;
  readonly season: ISeasonEntity;
}
