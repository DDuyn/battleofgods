
export interface IHelperService {
    isNull<T>(entity: T): boolean;
    extractElementsUndefined<T>(list: T[]): T[];
}