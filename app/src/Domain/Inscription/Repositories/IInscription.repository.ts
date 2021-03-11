import { Inscription } from '../Model/Inscription';

export interface IInscriptionRepository {
  findAll(): Promise<Inscription[]>;
  createInscription(inscription: Inscription): Promise<Inscription>;
  findInscriptionBySpecification(inscription: Inscription): Promise<Inscription[]>;
}
