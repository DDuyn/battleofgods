import { Inject, Injectable } from '@nestjs/common';
import { ICounterService } from 'src/Application/Counter/Services/Interfaces/ICounter.service';
import RegionDto from 'src/Application/Region/Dto/Region.dto';
import { IRegionService } from 'src/Application/Region/Services/Interfaces/IRegion.service';
import { UtilsService } from 'src/Application/Shared/Services/Utils.service';
import { CONSTANTS } from 'src/Utils/Constants/Constants';

@Injectable()
export class GodHelper extends UtilsService {
  constructor(
    @Inject('ICounterService') private readonly counterService: ICounterService,
    @Inject('IRegionService') private readonly regionService: IRegionService,
  ) {
    super();
  }
  getNextSequenceValue(model: string): Promise<number> {
    return this.counterService.getNextSequenceValue(model);
  }

  async getRegionDto(regionId: number): Promise<RegionDto> {
    return await this.regionService.findById(regionId, CONSTANTS.SHOWID);
  }
}
