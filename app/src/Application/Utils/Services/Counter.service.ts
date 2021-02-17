import { Inject, Injectable } from '@nestjs/common';
import { ICounterRepository } from 'src/Domain/Counter/Repositories/ICounter.repository';
import { ICounterService } from './Interfaces/ICounter.service';


@Injectable()
export class CounterService implements ICounterService {
  constructor(
    @Inject('ICounterRepository')
    private readonly counterRepository: ICounterRepository
  ) {}
    async getNextSequenceValue(model: string): Promise<number> {
        return await this.counterRepository.getNextSequenceValue(model);
    }
}
