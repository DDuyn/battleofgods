import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import MatchDto from 'src/Application/Match/Dto/Match.dto';
import MatchCreateDto from 'src/Application/Match/Dto/MatchCreate.dto';
import { IMatchService } from 'src/Application/Match/Services/Interfaces/IMatch.service';

@ApiTags('match')
@Controller('match')
export class MatchController {
  constructor(@Inject('IMatchService') private readonly matchService: IMatchService) {}
  @ApiResponse({ status: 200, description: 'Return Matches', type: [MatchDto] })
  @Get('/')
  async getAllMatch(): Promise<MatchDto[]> {
    return await this.matchService.findAll();
  }
  @ApiResponse({ status: 200, description: 'Return a match', type: MatchDto })
  @ApiResponse({ status: 404, description: 'Match Not Found' })
  @Get('/:matchId')
  async getMatchById(@Param('matchId') matchId: number): Promise<MatchDto> {
    return await this.matchService.findMatchById(matchId);
  }

  @ApiBody({ description: 'Match', type: MatchCreateDto })
  @ApiResponse({ status: 200, description: 'Match Created', type: MatchCreateDto })
  @Post('/')
  async createMatch(@Body() match: MatchCreateDto): Promise<MatchCreateDto> {
    return await this.matchService.createMatch(match);
  }
}
