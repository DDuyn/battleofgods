import { God } from '../Model/God';

export interface IGodRepository {
  findAll(): Promise<God[]>;
}
