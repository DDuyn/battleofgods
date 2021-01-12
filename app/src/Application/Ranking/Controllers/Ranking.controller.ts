import { Controller, Inject, Get, Post, Put, Body } from '@nestjs/common';
import RankingDto from '../Dto/Ranking.dto';
import { IRankingService } from '../Services/Interfaces/IRanking.service';
import { ApiTags, ApiResponse, ApiBody } from '@nestjs/swagger';

@ApiTags('ranking')
@Controller('ranking')
export class RankingController {
  constructor(
    @Inject('IRankingService') private readonly rankingService: IRankingService,
  ) {}

  @ApiResponse({ status: 200, description: 'Return Ranking', type: RankingDto })
  @Get('/')
  async getAllRanking(): Promise<RankingDto[]> {
    return await this.rankingService.findAll();
  }

  @ApiResponse({ status: 200, description: 'Create Ranking', type: RankingDto })
  @Post('/')
  async createRanking(): Promise<RankingDto[]> {
    return await this.rankingService.createRanking();
  }

  @ApiBody({ description: 'Ranking list', type: RankingDto })
  @ApiResponse({
    status: 200,
    description: 'Ranking Updated',
    type: RankingDto,
  })
  @Put('/')
  async updateRankingByGod(
    @Body() rankingList: RankingDto[],
  ): Promise<RankingDto[]> {
    return await this.rankingService.updateRankingByGod(rankingList);
  }
}
