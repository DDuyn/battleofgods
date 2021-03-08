export interface IHelperService {
  isNull<T>(entity: T): boolean;
  isArrayNull<T>(entityList: T[]): boolean;
  extractElementsUndefined<T>(list: T[]): T[];
}
