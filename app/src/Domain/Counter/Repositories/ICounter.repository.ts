
export interface ICounterRepository {
    getNextSequenceValue(model: string): Promise<number>;
}