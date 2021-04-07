import { GenericSpecification } from 'src/Application/Shared/Specification/Specification.generic';
import PointsSearchDto from '../../Dto/PointsSearch.dto';

export class PointsSpecification extends GenericSpecification {
  readonly TYPECOMPETITIONID = 'TYPECOMPETITIONID';
  readonly ROUNDID = 'ROUNDID';
  constructor(searchDto: PointsSearchDto) {
    super();
    this.setSpecification(searchDto);
  }
}
