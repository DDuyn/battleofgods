import { God } from '../Model/God';

export interface IGodRepository {
  findAll(): Promise<God[]>;
  findByName(godName: string): Promise<God>;
  createGod(god: God): Promise<God>;
}
