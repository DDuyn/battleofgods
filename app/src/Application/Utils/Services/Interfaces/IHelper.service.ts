
export interface IHelperService {
    getNextSequenceValue(model: string): Promise<number>;
    isNull<T>(entity: T): boolean;
    extractElementsUndefined<T>(list: T[]): T[];
}