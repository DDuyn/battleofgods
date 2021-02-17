import { Schema , Document} from 'mongoose';

export const CounterModel = new Schema({
    _id: {type: String, required: true},
    sequence_value: { type: Number, default: 1}
});

export interface ICounterEntity extends Document {
    readonly _id: string;
    readonly sequence_value: number;
}
