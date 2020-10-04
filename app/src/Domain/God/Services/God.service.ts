import { Injectable, Inject } from '@nestjs/common';
import { God } from '../Model/God';
import { IGodRepository } from '../Repositories/IGod.repository';
import { IGodService } from './Interfaces/IGod.service';

@Injectable()
export class GodService implements IGodService {
  constructor(
    @Inject('IGodRepository')
    private readonly GodRepository: IGodRepository,
  ) {}

  async findAll(): Promise<God[]> {
    return await this.GodRepository.findAll();
  }

  async findById(godId: string): Promise<God> {
    return await this.GodRepository.findById(godId);
  }

  async findByName(godName: string): Promise<God> {
    return await this.GodRepository.findByName(godName);
  }
}
