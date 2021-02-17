import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { ApiTags, ApiParam, ApiResponse, ApiBody } from '@nestjs/swagger';
import CompetitionDto from 'src/Application/Competition/Dto/Competition.dto';
import CompetitionCreateDto from 'src/Application/Competition/Dto/CompetitionCreate.dto';
import { ICompetitionService } from 'src/Application/Competition/Services/Interfaces/ICompetition.service';


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
    type: CompetitionCreateDto,
  })
  @ApiBody({
    description: 'A competition',
    type: CompetitionCreateDto,
  })
  async createCompetition(
    @Body() competition: CompetitionCreateDto,
  ): Promise<CompetitionCreateDto> {
    return this.competitionService.createCompetition(competition);
  }

  // TODO: Obtener estadísticas totales de una competición
}
