import { Injectable } from '@nestjs/common';
import { IHelperService } from './Interfaces/IHelper.service';
@Injectable()
export class HelperService implements IHelperService {
    isNull<T>(entity: T): boolean {
      return !entity;
    }
    extractElementsUndefined<T>(list: T[]): T[] {
      return list.filter(x => { return !!x });
    }
}
