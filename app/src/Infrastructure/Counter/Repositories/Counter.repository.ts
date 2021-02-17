import { Injectable } from '@nestjs/common';
import { ICounterRepository } from 'src/Domain/Counter/Repositories/ICounter.repository';
import { InjectModel } from '@nestjs/mongoose';
import { ICounterEntity } from 'src/Domain/Counter/Model/Counter';
import { Model } from 'mongoose';

@Injectable()
export class CounterRepository implements ICounterRepository {
  constructor(
    @InjectModel('Counter')
    private counterModel: Model<ICounterEntity>,
  ) {}
  async getNextSequenceValue(model: string): Promise<number> {
    return (
      await this.counterModel.findByIdAndUpdate(
        { _id: model },
        { $inc: { sequence_value: 1 } },
        { new: true },
      )
    ).sequence_value;
  }
}
