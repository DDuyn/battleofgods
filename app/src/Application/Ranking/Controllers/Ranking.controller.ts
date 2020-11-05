import { Controller, Inject, Get, Post } from '@nestjs/common';
import RankingDto from '../Dto/Ranking.dto';
import { IRankingService } from '../Services/Interfaces/IRanking.service';
import { ApiTags, ApiResponse } from '@nestjs/swagger';

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

  // TODO: Realizar servicio update ranking
}
