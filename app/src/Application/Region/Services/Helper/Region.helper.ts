import { Inject } from '@nestjs/common';
import { ICounterService } from 'src/Application/Counter/Services/Interfaces/ICounter.service';
import { UtilsService } from 'src/Application/Shared/Services/Utils.service';

export class RegionHelper extends UtilsService {
  constructor(@Inject('ICounterService') private readonly counterService: ICounterService) {
    super();
  }
  getNextSequenceValue(model: string): Promise<number> {
    return this.counterService.getNextSequenceValue(model);
  }
}
