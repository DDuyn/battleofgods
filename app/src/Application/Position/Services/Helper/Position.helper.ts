import { Inject, Injectable } from '@nestjs/common';
import CompetitionDto from 'src/Application/Competition/Dto/Competition.dto';
import { CompetitionMapper } from 'src/Application/Competition/Mappers/Competition.mapper';
import { ICompetitionService } from 'src/Application/Competition/Services/Interfaces/ICompetition.service';
import GodDto from 'src/Application/God/Dto/God.dto';
import { IGodService } from 'src/Application/God/Services/Interfaces/IGod.service';
import RoundDto from 'src/Application/Round/Dto/Round.dto';
import { IRoundService } from 'src/Application/Round/Services/Interfaces/IRound.service';
import SeasonDto from 'src/Application/Season/Dto/Season.dto';
import { ISeasonService } from 'src/Application/Season/Services/Interfaces/ISeason.service';
import { UtilsService } from 'src/Application/Shared/Services/Utils.service';
import { Position } from 'src/Domain/Position/Model/Position';
import { CONSTANTS } from 'src/Utils/Constants/Constants';
import { GodMapper } from '../../../God/Mappers/God.mapper';
import PositionCreateDto from '../../Dto/PositionCreate.dto';
import PositionSearchDto from '../../Dto/PositionSearch.dto';
import { PositionSpecification } from '../Specifications/Position.specification';
@Injectable()
export class PositionHelper extends UtilsService {
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
    const roundDto: RoundDto = await this.getRound(positionDto.roundId);
    const competitionDto: CompetitionDto = await this.getCompetition(positionDto.competitionId);
    const seasonDto: SeasonDto = await this.getSeason(positionDto.seasonId);
    return this.configEntityPosition({
      god: godDto,
      competition: competitionDto,
      season: seasonDto,
      round: roundDto,
      points: positionDto.points,
      isWinner: positionDto.isWinner,
    });
  }

  async configurePositionSpecs(searchDto: PositionSearchDto): Promise<Position> {
    const specification: PositionSpecification = new PositionSpecification(searchDto);
    const godDto: GodDto = specification.FilterFields.has(specification.GODID) ? await this.getGod(searchDto.godId) : null;
    const seasonDto: SeasonDto = specification.FilterFields.has(specification.SEASONID) ? await this.getSeason(searchDto.seasonId) : null;
    const competitionDto: CompetitionDto = specification.FilterFields.has(specification.COMPETITIONID)
      ? await this.getCompetition(searchDto.competitionId)
      : null;
    const roundDto: RoundDto = specification.FilterFields.has(specification.ROUNDID) ? await this.getRound(searchDto.roundId) : null;

    return this.configEntityPosition({ god: godDto, competition: competitionDto, season: seasonDto, round: roundDto });
  }

  private configEntityPosition(relations: {
    god: GodDto;
    competition: CompetitionDto;
    season: SeasonDto;
    round: RoundDto;
    points?: number;
    isWinner?: boolean;
  }): Position {
    const positionEntity: Position = {
      god: !!relations.god ? GodMapper.fromDtoToEntity(relations.god) : null,
      competition: !!relations.competition ? CompetitionMapper.fromDtoToEntity(relations.competition) : null,
      round: relations.round,
      season: relations.season,
      points: !!relations.points ? relations.points : null,
      isWinner: !!relations.isWinner ? relations.isWinner : null,
    };
    return positionEntity;
  }
}
