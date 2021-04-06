import { Inject, Injectable } from '@nestjs/common';
import { ICounterService } from 'src/Application/Counter/Services/Interfaces/ICounter.service';
import { UtilsService } from 'src/Application/Shared/Services/Utils.service';
import { TypeCompetition } from '../../../../Domain/TypeCompetition/Model/TypeCompetition';

@Injectable()
export class TypeCompetitionHelper extends UtilsService {
  constructor(@Inject('ICounterService') private readonly counterService: ICounterService) {
    super();
  }
  getNextSequenceValue(model: string): Promise<number> {
    return this.counterService.getNextSequenceValue(model);
  }

  modifyDescription(typeCompetitionOrigin: TypeCompetition, description: string): TypeCompetition {
    const typeCompetitionModified: TypeCompetition = {
      typeCompetitionId: typeCompetitionOrigin.typeCompetitionId,
      name: typeCompetitionOrigin.name,
      description: description,
    };
    return typeCompetitionModified;
  }
}
