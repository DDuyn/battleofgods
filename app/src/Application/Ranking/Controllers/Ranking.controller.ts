import { Controller, Inject, Get, Post } from '@nestjs/common';
import RankingDto from '../Dto/Ranking.dto';
import { IRankingService } from '../Services/Interfaces/IRanking.service';

@Controller('ranking')
export class RankingController {
  constructor(
    @Inject('IRankingService') private readonly rankingService: IRankingService,
  ) {}

  @Get('/')
  async getAllRanking(): Promise<RankingDto[]> {
    return await this.rankingService.findAll();
  }

  @Post('/')
  async createRanking(): Promise<RankingDto[]> {
    return await this.rankingService.createRanking();
  }

  // TODO: Realizar servicio update ranking
}
