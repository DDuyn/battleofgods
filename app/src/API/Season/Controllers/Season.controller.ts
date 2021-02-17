import { Controller, Get, Inject, Param, Post, Put } from '@nestjs/common';
import { ApiTags, ApiParam, ApiResponse, ApiBody } from '@nestjs/swagger';
import SeasonDto from 'src/Application/Season/Dto/Season.dto';
import { ISeasonService } from 'src/Application/Season/Services/Interfaces/ISeason.service';

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

  @ApiBody({ description: 'Create new season', type: SeasonDto})
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
