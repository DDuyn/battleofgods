import { Injectable } from '@nestjs/common';
@Injectable()
export class UtilsService implements UtilsService {
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
