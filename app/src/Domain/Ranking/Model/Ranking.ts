import { God } from "src/Domain/God/Model/God";

export type Ranking = {
  readonly _id?: string;
  readonly points: number;
  readonly god: God;
  readonly wins: number;
};
