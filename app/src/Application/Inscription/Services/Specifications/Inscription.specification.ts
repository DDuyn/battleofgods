import { GenericSpecification } from 'src/Application/Shared/Specification/Specification.generic';
import InscriptionSearchDto from '../../Dto/InscriptionSearch.dto';

export class InscriptionSpecification extends GenericSpecification {
  readonly GODID = 'GODID';
  readonly COMPETITIONID = 'COMPETITIONID';
  readonly SEASONID = 'SEASON';
  constructor(searchDto: InscriptionSearchDto) {
    super();
    this.setSpecification(searchDto);
  }
}
