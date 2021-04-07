import { Body, Controller, Get, HttpStatus, Inject, Param, Post, Put } from '@nestjs/common';
import { ApiBody, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import CompetitionDto from 'src/Application/Competition/Dto/Competition.dto';
import CompetitionCreateDto from 'src/Application/Competition/Dto/CompetitionCreate.dto';
import CompetitionUpdateDto from 'src/Application/Competition/Dto/CompetitionUpdate.dto';
import { ICompetitionService } from 'src/Application/Competition/Services/Interfaces/ICompetition.service';
import { CONSTANTS } from 'src/Utils/Constants/Constants';

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
  async getCompetition(@Param('competitionId') competitionId: number): Promise<CompetitionDto> {
    return await this.competitionService.findById(competitionId, CONSTANTS.NOTSHOWID);
  }

  @Post('/')
  @ApiResponse({
    status: 200,
    description: 'Create a competition',
    type: CompetitionDto,
  })
  @ApiBody({
    description: 'A competition',
    type: CompetitionCreateDto,
  })
  async createCompetition(@Body() competition: CompetitionCreateDto): Promise<CompetitionDto> {
    return this.competitionService.createCompetition(competition);
  }

  @Put('/:competitionId')
  @ApiResponse({
    status: 200,
    description: 'Update competition',
    type: CompetitionDto,
  })
  @ApiBody({
    description: 'Competition to update',
    type: CompetitionUpdateDto,
  })
  async updateCompetition(
    @Param('competitionId') competitionId: number,
    @Body() competitionDto: CompetitionUpdateDto,
  ): Promise<CompetitionDto> {
    return this.competitionService.updateCompetition(+competitionId, competitionDto);
  }

  @Put('/')
  @ApiResponse({
    status: 200,
    description: 'Set false the competitions',
    type: HttpStatus.OK.toString(),
  })
  async resetAllCompetitions(): Promise<HttpStatus> {
    return this.competitionService.resetAllCompetitions();
  }

  // TODO: Obtener estadísticas totales de una competición
}
