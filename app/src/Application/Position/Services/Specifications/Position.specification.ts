import PositionSearchDto from '../../Dto/PositionSearch.dto';
export class PositionSpecification {
  readonly GODID = 'GODID';
  readonly COMPETITIONID = 'COMPETITIONID';
  readonly ROUNDID = 'ROUNDID';
  readonly SEASONID = 'SEASONID';

  readonly SpecificationFilter: Map<string, any> = new Map();
  readonly FilterFields: Map<string, any> = new Map();

  constructor(searchDto: PositionSearchDto) {
    this.SpecificationFilter = new Map(Object.entries(searchDto));
    this.extractFilterFields();
  }

  private isFiltering(filterField: string): boolean {
    return this.SpecificationFilter.get(filterField) !== null;
  }

  private extractFilterFields(): void {
    this.SpecificationFilter.forEach((value, key) => {
      if (this.isFiltering(key)) this.FilterFields.set(key.toUpperCase(), value);
    });
  }
}
