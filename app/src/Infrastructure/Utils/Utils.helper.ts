export class UtilsHelperRepository {
  private readonly queryFilter: any = {};
  private mapEntity: Map<any, any> = new Map();
  convertEntityToQueryFilter<T>(entity: T): T {
    this.mapEntity = new Map(Object.entries(entity));
    return this.createQueryFilter();
  }
  private createQueryFilter<T>(): T {
    this.mapEntity.forEach((value, key) => {
      if (value !== null) this.queryFilter[key] = value._id;
    });
    return this.queryFilter;
  }
}
