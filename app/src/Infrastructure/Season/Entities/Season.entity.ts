import { Schema, Document } from "mongoose";

export const SeasonModel = new Schema({
    season: { type: Number, required: true },
    competitionPlayed: { type: Number, required: true, default: 0 },
    totalCompetition: { type: Number, required: true },
    isFinished: { type: Boolean, required: true, default: false }
});

export interface ISeasonEntity extends Document {
    readonly season: number;
    readonly competitionPlayed: number;
    readonly totalCompetition: number;
    readonly isFinished: boolean;
}