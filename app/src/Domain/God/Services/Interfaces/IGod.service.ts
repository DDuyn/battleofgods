import { God } from '../../Model/God';

export interface IGodService {
  findAll(): Promise<God[]>;
  findByName(godName: string): Promise<God>;
}
