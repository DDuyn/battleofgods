import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IInscriptionEntity } from 'src/Domain/Inscription/Model/Inscription';
import { IInscriptionRepository } from 'src/Domain/Inscription/Repositories/IInscription.repository';
import { UtilsHelperRepository } from 'src/Infrastructure/Utils/Utils.helper';

@Injectable()
export class InscriptionRepository implements IInscriptionRepository {
  constructor(
    @InjectModel('Inscription') private readonly inscriptionModel: Model<IInscriptionEntity>,
    @Inject('UtilsHelperRepository') private readonly utilsHelper: UtilsHelperRepository,
  ) {}
  async findAll(): Promise<IInscriptionEntity[]> {
    return await this.inscriptionModel.find();
  }
  async createInscription(inscription: IInscriptionEntity): Promise<IInscriptionEntity> {
    return await this.inscriptionModel.create(inscription);
  }
  async findInscriptionBySpecification(inscription: IInscriptionEntity): Promise<IInscriptionEntity[]> {
    const query = this.utilsHelper.convertEntityToQueryFilter(inscription);
    return await this.inscriptionModel.find(query);
  }
}
