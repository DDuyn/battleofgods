import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import CompetitionDto from '../Dto/Competition.dto';
import { ICompetitionService } from '../Services/Interfaces/ICompetitionService';
import { ApiTags, ApiParam, ApiResponse, ApiBody } from '@nestjs/swagger';

@ApiTags('competition')
@Controller('competition')
export class CompetitionController {
  constructor(
    @Inject('ICompetitionService')
    private readonly competitionService: ICompetitionService,
  ) {}

  @Get('/')
  @ApiResponse({
    status: 200,
    description: 'Return list of competitions',
    type: CompetitionDto,
  })
  async getCompetitions(): Promise<CompetitionDto[]> {
    return await this.competitionService.findAll();
  }

  @ApiParam({
    name: 'competitionId',
    type: 'number',
    description: 'Id of competition',
  })
  @ApiResponse({
    status: 200,
    description: 'Return a competition',
    type: CompetitionDto,
  })
  @Get('/:competitionId')
  async getCompetition(
    @Param('competitionId') competitionId: number,
  ): Promise<CompetitionDto> {
    return await this.competitionService.findById(competitionId);
  }

  @Post('/')
  @ApiResponse({
    status: 200,
    description: 'Create a competition',
    type: CompetitionDto,
  })
  @ApiBody({
    description: 'A competition',
    type: CompetitionDto,
  })
  async createCompetition(
    @Body() competition: CompetitionDto,
  ): Promise<CompetitionDto> {
    return this.competitionService.createCompetition(competition);
  }

  // TODO: Obtener estadísticas totales de una competición
}
