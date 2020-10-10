/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Controller, Inject, Get, Res, HttpStatus, Post } from '@nestjs/common';
import { IRankingService } from 'src/Domain/Ranking/Services/Interfaces/IRanking.service';
import { RankingMapper } from '../Mappers/Ranking.mapper';

@Controller('ranking')
export class RankingController {
  constructor(
    @Inject('IRankingService') private readonly rankingService: IRankingService,
  ) {}

  @Get('/')
  async getAllRanking(@Res() res) {
    const ranking = await this.rankingService.findAll();
    res.status(HttpStatus.OK).json(RankingMapper.fromEntityListToDto(ranking));
  }

  @Post('/')
  async createRanking(@Res() res) {
    const ranking = await this.rankingService.createRanking();
    res.status(HttpStatus.OK).json(RankingMapper.fromEntityListToDto(ranking));
  }

  // TODO: Realizar servicio update ranking
}
