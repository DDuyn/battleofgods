export class GenericSpecification {
  protected SpecificationFilter: Map<string, any> = new Map();
  readonly FilterFields: Map<string, any> = new Map();

  protected setSpecification<T>(searchDto: T): void {
    this.SpecificationFilter = new Map(Object.entries(searchDto));
    this.extractFilterFields();
  }

  protected isFiltering(filterField: string): boolean {
    return this.SpecificationFilter.get(filterField) !== null;
  }

  protected extractFilterFields(): void {
    this.SpecificationFilter.forEach((value, key) => {
      if (this.isFiltering(key)) this.FilterFields.set(key.toUpperCase(), value);
    });
  }
}
