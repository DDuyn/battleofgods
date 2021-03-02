import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { IHelperService } from 'src/Application/Utils/Services/Interfaces/IHelper.service';
import { God } from 'src/Domain/God/Model/God';

@Injectable()
export class GodHelper {
    constructor(
        @Inject('IHelperService') private readonly helperService: IHelperService,
    ) {}
    getNextSequenceValue(model: string): Promise<number> {
       return this.helperService.getNextSequenceValue(model);
    }
    isGodNull(god: God): void {
        if(this.helperService.isNull(god)) throw new NotFoundException;
    }
}