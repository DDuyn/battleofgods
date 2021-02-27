import { Controller, Inject, Get, Post, Put, Body, HttpStatus, NotFoundException } from '@nestjs/common';
import { ApiTags, ApiResponse, ApiBody } from '@nestjs/swagger';
import RankingDto from 'src/Application/Ranking/Dto/Ranking.dto';
import RankingUpdateDto from 'src/Application/Ranking/Dto/RankingUpdate.dto';
import { IRankingService } from 'src/Application/Ranking/Services/Interfaces/IRanking.service';

@ApiTags('ranking')
@Controller('ranking')
export class RankingController {
  constructor(
    @Inject('IRankingService') private readonly rankingService: IRankingService,
  ) {}

  @ApiResponse({ status: 200, description: 'Return Ranking', type: [RankingDto] })
  @Get('/')
  async getAllRanking(): Promise<RankingDto[]> {
    return await this.rankingService.findAll();
  }

  @ApiResponse({ status: 200, description: 'Create Ranking', type: [RankingDto] })
  @Post('/')
  async createRanking(): Promise<RankingDto[]> {
    return await this.rankingService.createRanking();
  }

  @ApiBody({ description: 'Ranking list', type: [RankingUpdateDto] })
  @ApiResponse({
    status: 200,
    description: 'Ranking Updated',
    type: HttpStatus.OK.toString(),
  })  
  @ApiResponse({
    status: 404,
    description: 'Ranking Not Updated',
    type: HttpStatus.NOT_FOUND.toString(),
  })
  @Put('/')
  async updateRankingByGod(
    @Body() rankingList: RankingUpdateDto[],
  ): Promise<void> {    
    const status: HttpStatus = await this.rankingService.updateRankingByGod(rankingList);
    if(status === HttpStatus.NOT_FOUND) throw NotFoundException;
  }
}
