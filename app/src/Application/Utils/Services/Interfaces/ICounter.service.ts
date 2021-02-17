
export interface ICounterService {
    getNextSequenceValue(model: string): Promise<number>;
}