import { Inject } from '@nestjs/common';
import CompetitionDto from 'src/Application/Competition/Dto/Competition.dto';
import { ICompetitionService } from 'src/Application/Competition/Services/Interfaces/ICompetition.service';
import GodDto from 'src/Application/God/Dto/God.dto';
import { IGodService } from 'src/Application/God/Services/Interfaces/IGod.service';
import SeasonDto from 'src/Application/Season/Dto/Season.dto';
import { ISeasonService } from 'src/Application/Season/Services/Interfaces/ISeason.service';
import { HelperService } from 'src/Application/Utils/Services/Helper.service';
import { Inscription } from 'src/Domain/Inscription/Model/Inscription';
import { CONSTANTS } from 'src/Utils/Constants/Constants';
import InscriptionCreateDto from '../../Dto/InscriptionCreate.dto';
import InscriptionSearchDto from '../../Dto/InscriptionSearch.dto';
import { InscriptionMapper } from '../../Mappers/Inscription.mapper';
import { InscriptionSpecification } from '../Specifications/Inscription.specification';

export class InscriptionHelper extends HelperService {
  constructor(
    @Inject('IGodService') private readonly godService: IGodService,
    @Inject('ICompetitionService') private readonly competitionService: ICompetitionService,
    @Inject('ISeasonService') private readonly seasonService: ISeasonService,
  ) {
    super();
  }
  private async getGod(godId: number): Promise<GodDto> {
    return await this.godService.findByGodId(godId, CONSTANTS.SHOWID);
  }
  private async getCompetition(competitionId: number): Promise<CompetitionDto> {
    return await this.competitionService.findById(competitionId, CONSTANTS.SHOWID);
  }
  private async getSeason(seasonId: number): Promise<SeasonDto> {
    return await this.seasonService.findBySeason(seasonId, CONSTANTS.SHOWID);
  }

  async configureInscriptionList(inscriptionListDto: InscriptionCreateDto[]): Promise<Inscription[]> {
    const inscriptionList: Inscription[] = [];
    await Promise.all(
      inscriptionListDto.map(async inscriptionDto => {
        inscriptionDto.god = await this.getGod(inscriptionDto.godId);
        inscriptionDto.competition = await this.getCompetition(inscriptionDto.competitionId);
        inscriptionDto.season = await this.getSeason(inscriptionDto.seasonId);
        inscriptionList.push(InscriptionMapper.fromDtoToEntity(inscriptionDto));
      }),
    );
    return inscriptionList;
  }

  async configurePositionSpecs(searchDto: InscriptionSearchDto): Promise<Inscription> {
    const specification: InscriptionSpecification = new InscriptionSpecification(searchDto);
    const godDto: GodDto = specification.FilterFields.has(specification.GODID) ? await this.getGod(searchDto.godId) : null;
    const seasonDto: SeasonDto = specification.FilterFields.has(specification.SEASONID) ? await this.getSeason(searchDto.seasonId) : null;
    const competitionDto: CompetitionDto = specification.FilterFields.has(specification.COMPETITIONID)
      ? await this.getCompetition(searchDto.competitionId)
      : null;

    const inscriptionEntity: Inscription = {
      god: godDto,
      season: seasonDto,
      competition: competitionDto,
    };
    return inscriptionEntity;
  }
}
