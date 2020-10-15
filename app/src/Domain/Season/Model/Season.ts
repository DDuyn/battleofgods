export type Season = {
    readonly _id?: string;
    readonly season: number;
    readonly competitionPlayed: number;
    readonly totalCompetition: number;
    readonly isFinished: boolean;
}