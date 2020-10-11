import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import CompetitionDto from '../Dto/Competition.dto';
import { ICompetitionService } from '../Services/Interfaces/ICompetitionService';

@Controller('competition')
export class CompetitionController {
  constructor(
    @Inject('ICompetitionService')
    private readonly competitionService: ICompetitionService,
  ) {}

  @Get('/')
  async getCompetitions(): Promise<CompetitionDto[]> {
    return await this.competitionService.findAll();
  }

  @Get('/:competitionId')
  async getCompetition(
    @Param() competitionId: number,
  ): Promise<CompetitionDto> {
    return await this.competitionService.findById(competitionId);
  }

  @Post('/')
  async createCompetition(
    @Body() competition: CompetitionDto,
  ): Promise<CompetitionDto> {
    return this.competitionService.createCompetition(competition);
  }

  // TODO: Obtener estadísticas totales de una competición
}
