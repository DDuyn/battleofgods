import { GenericSpecification } from 'src/Application/Shared/Specification/Specification.generic';
import PositionSearchDto from '../../Dto/PositionSearch.dto';
export class PositionSpecification extends GenericSpecification {
  readonly GODID = 'GODID';
  readonly COMPETITIONID = 'COMPETITIONID';
  readonly ROUNDID = 'ROUNDID';
  readonly SEASONID = 'SEASONID';

  constructor(searchDto: PositionSearchDto) {
    super();
    this.setSpecification(searchDto);
  }
}
