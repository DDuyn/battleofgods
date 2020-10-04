import { God } from '../Model/God';

export interface IGodRepository {
  findAll(): Promise<God[]>;
  findById(godId: string): Promise<God>;
  findByName(godName: string): Promise<God>;
}
