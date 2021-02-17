import { Controller, Get, Inject, Param, Post, Put } from '@nestjs/common';
import SeasonDto from '../Dto/Season.dto';
import { ISeasonService } from '../Services/Interfaces/ISeason.service';
import { ApiTags, ApiParam, ApiResponse, ApiBody } from '@nestjs/swagger';

@ApiTags('season')
@Controller('season')
export class SeasonController {
  constructor(
    @Inject('ISeasonService') private readonly seasonService: ISeasonService,
  ) {}

  @ApiResponse({
    status: 200,
    description: 'Return list of Seasons',
    type: SeasonDto,
  })
  @Get('/')
  async getSeasons(): Promise<SeasonDto[]> {
    return await this.seasonService.findAll();
  }

  @ApiParam({ name: 'season', description: 'Id of Season', type: 'number' })
  @ApiResponse({ status: 200, description: 'Return a Season', type: SeasonDto })
  @Get('/:season')
  async getSeason(@Param('season') season: number): Promise<SeasonDto> {
    return await this.seasonService.findBySeason(season);
  }

  @ApiResponse({
    status: 200,
    description: 'Created New Season',
    type: SeasonDto,
  })
  @Post('/create')
  async createNewSeason(): Promise<SeasonDto> {
    return await this.seasonService.createNewSeason();
  }

  @ApiParam({ name: 'seasonId', description: 'Id of Season', type: 'number' })
  @ApiResponse({ status: 200, description: 'Updated Season', type: SeasonDto })
  @Put('/updateSeason/:seasonId')
  async updateSeason(@Param('seasonId') seasonId: number): Promise<SeasonDto> {
    return await this.seasonService.updateSeason(seasonId);
  }
}
