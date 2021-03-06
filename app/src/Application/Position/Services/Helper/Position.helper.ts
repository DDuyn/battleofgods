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

  async configurePositionEntityByGod(godId: number): Promise<Position> {
    const godDto: GodDto = await this.getGod(godId);
    const positionEntity: Position = {
      god: godDto,
    };
    return positionEntity;
  }

  async configurePositionEntityByGodAndSeason(godId: number, seasonId: number): Promise<Position> {
    const godDto: GodDto = await this.getGod(godId);
    const seasonDto: SeasonDto = await this.getSeason(seasonId);
    const positionEntity: Position = {
      god: godDto,
      season: seasonDto,
    };
    return positionEntity;
  }

  //TODO: Specifications for Get
}
