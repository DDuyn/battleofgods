import { Inject, Injectable } from '@nestjs/common';
import { ICounterService } from 'src/Application/Counter/Services/Interfaces/ICounter.service';
import { UtilsService } from 'src/Application/Shared/Services/Utils.service';
import TypeCompetitionDto from 'src/Application/TypeCompetition/Dto/TypeCompetition.dto';
import { ITypeCompetitionService } from 'src/Application/TypeCompetition/Services/Interface/ITypeCompetition.service';
import { Competition } from 'src/Domain/Competition/Model/Competition';
import { CONSTANTS } from 'src/Utils/Constants/Constants';
import CompetitionUpdateDto from '../../Dto/CompetitionUpdate.dto';
@Injectable()
export class CompetitionHelper extends UtilsService {
  constructor(
    @Inject('ICounterService') private readonly counterService: ICounterService,
    @Inject('ITypeCompetitionService') private readonly typeCompetitionService: ITypeCompetitionService,
  ) {
    super();
  }
  getNextSequenceValue(model: string): Promise<number> {
    return this.counterService.getNextSequenceValue(model);
  }
  async getTypeCompetitionDto(typeCompetitionId: number): Promise<TypeCompetitionDto> {
    return await this.typeCompetitionService.findById(typeCompetitionId, CONSTANTS.SHOWID);
  }

  modifyCompetition(competitionOrigin: Competition, competitionDto: CompetitionUpdateDto): Competition {
    const competitioEntity: Competition = {
      competitionId: competitionOrigin.competitionId,
      name: competitionDto.name,
      typeCompetition: competitionOrigin.typeCompetition,
      description: competitionDto.description,
      isPlayed: competitionDto.isPlayed,
    };
    return competitioEntity;
  }
}
