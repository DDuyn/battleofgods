import { Inject, Injectable } from '@nestjs/common';
import { ICounterService } from 'src/Application/Counter/Services/Interfaces/ICounter.service';
import { UtilsService } from 'src/Application/Shared/Services/Utils.service';
@Injectable()
export class CompetitionHelper extends UtilsService {
  constructor(@Inject('ICounterService') private readonly counterService: ICounterService) {
    super();
  }
  getNextSequenceValue(model: string): Promise<number> {
    return this.counterService.getNextSequenceValue(model);
  }
}
