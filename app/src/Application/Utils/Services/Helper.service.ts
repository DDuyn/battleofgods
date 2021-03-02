import { Inject, Injectable } from '@nestjs/common';
import { ICounterRepository } from 'src/Domain/Counter/Repositories/ICounter.repository';
import { IHelperService } from './Interfaces/IHelper.service';


@Injectable()
export class HelperService implements IHelperService {
  constructor(
    @Inject('ICounterRepository')
    private readonly counterRepository: ICounterRepository
  ) {}
    async getNextSequenceValue(model: string): Promise<number> {
        return await this.counterRepository.getNextSequenceValue(model);
    }
    isNull<T>(entity: T): boolean {
      return !entity;
    }
    extractElementsUndefined<T>(list: T[]): T[] {
      return list.filter(x => { return !!x });
    }
}
