
export interface IHelperService {
    getNextSequenceValue(model: string): Promise<number>;
}