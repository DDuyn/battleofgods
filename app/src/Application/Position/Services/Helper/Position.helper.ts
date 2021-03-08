import { Inject, Injectable } from '@nestjs/common';
import CompetitionDto from 'src/Application/Competition/Dto/Competition.dto';
import { ICompetitionService } from 'src/Application/Competition/Services/Interfaces/ICompetition.service';
import GodDto from 'src/Application/God/Dto/God.dto';
import { IGodService } from 'src/Application/God/Services/Interfaces/IGod.service';
import RoundDto from 'src/Application/Round/Dto/Round.dto';
import { IRoundService } from 'src/Application/Round/Services/Interfaces/IRound.service';
import SeasonDto from 'src/Application/Season/Dto/Season.dto';
import { ISeasonService } from 'src/Application/Season/Services/Interfaces/ISeason.service';
import { Position } from 'src/Domain/Position/Model/Position';
import { CONSTANTS } from 'src/Utils/Constants/Constants';
import { HelperService } from '../../../Utils/Services/Helper.service';
import PositionCreateDto from '../../Dto/PositionCreate.dto';
import PositionSearchDto from '../../Dto/PositionSearch.dto';
import { PositionSpecification } from '../Specifications/Position.specification';
@Injectable()
export class PositionHelper extends HelperService {
  constructor(
    @Inject('IGodService') private readonly godService: IGodService,
    @Inject('ICompetitionService') private readonly competitionService: ICompetitionService,
    @Inject('IRoundService') private readonly roundService: IRoundService,
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
  private async getRound(roundId: number): Promise<RoundDto> {
    return await this.roundService.findByRoundId(roundId, CONSTANTS.SHOWID);
  }
  private async getSeason(seasonId: number): Promise<SeasonDto> {
    return await this.seasonService.findBySeason(seasonId, CONSTANTS.SHOWID);
  }

  async createEntityPosition(positionDto: PositionCreateDto): Promise<Position> {
    //TODO: Validaciones
    const godDto: GodDto = await this.getGod(positionDto.godId);
    const competitionDto: CompetitionDto = await this.getCompetition(positionDto.competitionId);
    const roundDto: RoundDto = await this.getRound(positionDto.roundId);
    const seasonDto: SeasonDto = await this.getSeason(positionDto.seasonId);
    const positionEntity: Position = {
      god: godDto,
      competition: competitionDto,
      round: roundDto,
      season: seasonDto,
      points: positionDto.points,
    };
    return positionEntity;
  }

  async configurePositionSpecs(searchDto: PositionSearchDto): Promise<Position> {
    const specification: PositionSpecification = new PositionSpecification(searchDto);
    const godDto: GodDto = specification.FilterFields.has(specification.GODID) ? await this.getGod(searchDto.godId) : null;
    const seasonDto: SeasonDto = specification.FilterFields.has(specification.SEASONID) ? await this.getSeason(searchDto.seasonId) : null;
    const competitionDto: CompetitionDto = specification.FilterFields.has(specification.COMPETITIONID)
      ? await this.getCompetition(searchDto.competitionId)
      : null;
    const roundDto: RoundDto = specification.FilterFields.has(specification.ROUNDID) ? await this.getRound(searchDto.roundId) : null;

    const positionEntity: Position = {
      god: godDto,
      season: seasonDto,
      competition: competitionDto,
      round: roundDto,
    };
    return positionEntity;
  }
}
