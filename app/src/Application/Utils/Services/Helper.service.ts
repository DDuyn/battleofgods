import { Injectable } from '@nestjs/common';
import { IHelperService } from './Interfaces/IHelper.service';
@Injectable()
export class HelperService implements IHelperService {
  isArrayNull<T>(entityList: T[]): boolean {
    return entityList.length === 0;
  }
  isNull<T>(entity: T): boolean {
    return !entity;
  }
  extractElementsUndefined<T>(list: T[]): T[] {
    return list.filter(x => {
      return !!x;
    });
  }
}
