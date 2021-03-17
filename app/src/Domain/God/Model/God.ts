import { Document, Schema } from 'mongoose';
import { IRegionEntity } from 'src/Domain/Region/Model/Region';
import { Region } from '../../Region/Model/Region';

export type God = {
  readonly _id?: string;
  readonly godId: number;
  readonly name: string;
  readonly origen: Region;
  readonly history: string;
  readonly photo: string;
};

export const GodModel = new Schema({
  godId: { type: Number, required: true },
  name: { type: String, required: true },
  origen: { type: Schema.Types.ObjectId, ref: 'Region', required: true, autopopulate: true },
  history: { type: String, required: true },
  photo: { type: String, required: true },
});

export interface IGodEntity extends Document {
  readonly godId: number;
  readonly name: string;
  readonly origen: IRegionEntity;
  readonly history: string;
  readonly photo: string;
}
