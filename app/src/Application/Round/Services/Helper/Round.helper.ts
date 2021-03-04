import { Inject, Injectable } from '@nestjs/common';
import { ICounterService } from 'src/Application/Counter/Services/Interfaces/ICounter.service';
import { HelperService } from 'src/Application/Utils/Services/Helper.service';

@Injectable()
export class RoundHelper extends HelperService{
    constructor(
        @Inject('ICounterService') private readonly counterService: ICounterService
    ) {
        super();
    }
    
    getNextSequenceValue(model: string): Promise<number> {
       return this.counterService.getNextSequenceValue(model);
    }
}