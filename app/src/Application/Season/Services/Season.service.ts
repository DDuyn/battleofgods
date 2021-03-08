import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Season } from 'src/Domain/Season/Model/Season';
import { ISeasonRepository } from 'src/Domain/Season/Repositories/ISeason.repository';
import { MODELS } from '../../../Utils/Constants/Enum/Models.Enum';
import SeasonDto from '../Dto/Season.dto';
import SeasonCreateDto from '../Dto/SeasonCreate.dto';
import { SeasonMapper } from '../Mappers/Season.mapper';
import { SeasonHelper } from './Helper/Season.helper';
import { ISeasonService } from './Interfaces/ISeason.service';

@Injectable()
export class SeasonService implements ISeasonService {
  constructor(
    @Inject('ISeasonRepository')
    private readonly seasonRepository: ISeasonRepository,
    @Inject('SeasonHelper') private readonly seasonHelper: SeasonHelper,
  ) {}

  async findAll(): Promise<SeasonDto[]> {
    const seasonList: Season[] = await this.seasonRepository.findAll();
    return SeasonMapper.fromEntityListToDto(seasonList);
  }

  async findBySeason(seasonDto: number, showId = false): Promise<SeasonDto> {
    const season: Season = await this.seasonRepository.findBySeason(seasonDto);
    if (this.seasonHelper.isNull(season)) throw new NotFoundException();
    return SeasonMapper.fromEntityToDto(season, showId);
  }

  async createNewSeason(seasonDto: SeasonCreateDto): Promise<SeasonDto> {
    seasonDto.season = await this.seasonHelper.getNextSequenceValue(MODELS.SEASON);
    const season: Season = await this.seasonRepository.createNewSeason(seasonDto);
    if (this.seasonHelper.isNull(season)) throw new NotFoundException();
    return SeasonMapper.fromEntityToDto(season);
  }

  async updateSeason(seasonId: number): Promise<SeasonDto> {
    const season: Season = await this.seasonRepository.findBySeason(seasonId);
    const seasonToUpdate: Season = this.seasonHelper.setSeasonToUpdate(season);
    const seasonUpdated: Season = await this.seasonRepository.updateSeason(seasonToUpdate);
    if (this.seasonHelper.isNull(seasonUpdated)) throw new NotFoundException();
    return SeasonMapper.fromEntityToDto(seasonUpdated);
  }
}
