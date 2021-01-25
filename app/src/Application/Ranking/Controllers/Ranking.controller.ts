import { Controller, Inject, Get, Post, Put, Body, HttpStatus } from '@nestjs/common';
import RankingDto from '../Dto/Ranking.dto';
import RankingUpdateDto from '../Dto/RankingUpdate.dto';
import { IRankingService } from '../Services/Interfaces/IRanking.service';
import { ApiTags, ApiResponse, ApiBody } from '@nestjs/swagger';
import { CONSTANTS } from 'src/Utils/Constants/Constants';


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
  ): Promise<number> {    
    const status: HttpStatus = await this.rankingService.updateRankingByGod(rankingList);
    return (status === HttpStatus.OK) ? CONSTANTS.NUMBER_ONE : CONSTANTS.NUMBER_ZERO;
  }
}
