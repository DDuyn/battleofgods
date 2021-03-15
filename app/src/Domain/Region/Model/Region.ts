import { Document, Schema } from 'mongoose';

export type Region = {
  readonly _id?: string;
  readonly regionId: number;
  readonly description: string;
};

export const RegionModel = new Schema({
  regionId: { type: Number, required: true },
  description: { type: String, required: true },
});

export interface IRegionEntity extends Document {
  readonly regionId: number;
  readonly description: string;
}
