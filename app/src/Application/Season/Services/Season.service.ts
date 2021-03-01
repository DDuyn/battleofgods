import { Inject, Injectable } from '@nestjs/common';
import { IHelperService } from 'src/Application/Utils/Services/Interfaces/IHelper.service';
import { Season } from 'src/Domain/Season/Model/Season';
import { ISeasonRepository } from 'src/Domain/Season/Repositories/ISeason.repository';
import SeasonDto from '../Dto/Season.dto';
import SeasonCreateDto from '../Dto/SeasonCreate.dto';
import { SeasonMapper } from '../Mappers/Season.mapper';
import { ISeasonService } from './Interfaces/ISeason.service';
import { MODELS } from '../../../Utils/Constants/Enum/Models.Enum';

@Injectable()
export class SeasonService implements ISeasonService {
  constructor(
    @Inject('ISeasonRepository')
    private readonly seasonRepository: ISeasonRepository,
    @Inject('IHelperService') private readonly helperService: IHelperService,
  ) {}

  async findAll(): Promise<SeasonDto[]> {
    return SeasonMapper.fromEntityListToDto(
      await this.seasonRepository.findAll(),
    );
  }

  async findBySeason(season: number, showId = false): Promise<SeasonDto> {
    return SeasonMapper.fromEntityToDto(
      await this.seasonRepository.findBySeason(season), showId
    );
  }

  async createNewSeason(season: SeasonCreateDto): Promise<SeasonDto> {
    season.season = await this.helperService.getNextSequenceValue(MODELS.SEASON);
    return SeasonMapper.fromEntityToDto(
      await this.seasonRepository.createNewSeason(season),
    );
  }

  async updateSeason(seasonId: number): Promise<SeasonDto> {
    const season: Season = await this.seasonRepository.findBySeason(seasonId);
    const seasonUpdate: Season = {
      season: season.season,
      totalCompetition: season.totalCompetition,
      competitionPlayed: season.competitionPlayed + 1,
      isFinished: this.isFinishedSeason(
        season.competitionPlayed + 1,
        season.totalCompetition,
      ),
    };
    return SeasonMapper.fromEntityToDto(
      await this.seasonRepository.updateSeason(seasonUpdate),
    );
  }

  private isFinishedSeason(
    competitionPlayed: number,
    totalCompetition: number,
  ): boolean {
    return competitionPlayed === totalCompetition;
  }
}
