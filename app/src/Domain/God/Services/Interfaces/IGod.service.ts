import { God } from '../../Model/God';

export interface IGodService {
  findAll(): Promise<God[]>;
}
