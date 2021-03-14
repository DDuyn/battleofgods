import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import InscriptionDto from 'src/Application/Inscription/Dto/Inscription.dto';
import InscriptionCreateDto from 'src/Application/Inscription/Dto/InscriptionCreate.dto';
import InscriptionSearchDto from 'src/Application/Inscription/Dto/InscriptionSearch.dto';
import { IInscriptionService } from 'src/Application/Inscription/Services/Interfaces/IInscription.service';
import { InscriptionMapper } from '../../../Application/Inscription/Mappers/Inscription.mapper';

@ApiTags('inscription')
@Controller('inscription')
export class InscriptionController {
  constructor(@Inject('IInscriptionService') private readonly inscriptionService: IInscriptionService) {}

  @ApiResponse({ status: 200, description: 'Return all inscriptions', type: [InscriptionDto] })
  @Get('/')
  async getAllInscription(): Promise<InscriptionDto[]> {
    return await this.inscriptionService.findAll();
  }

  @ApiResponse({ status: 200, description: 'Return all inscriptions by god', type: [InscriptionDto] })
  @Get('/:godId')
  async getInscriptionByGod(@Param('godId') godId: number): Promise<InscriptionDto[]> {
    const searchDto: InscriptionSearchDto = InscriptionMapper.configureSearchDto(godId);
    return await this.inscriptionService.findInscriptionBySpecification(searchDto);
  }

  @ApiResponse({ status: 200, description: 'Return all inscription by God and Season', type: [InscriptionDto] })
  @Get('/byGodAndSeason/:godId/:seasonId')
  async getInscriptionByGodAndSeason(@Param('godId') godId: number, @Param('seasonId') seasonId: number): Promise<InscriptionDto[]> {
    const searchDto: InscriptionSearchDto = InscriptionMapper.configureSearchDto(godId, null, seasonId);
    return await this.inscriptionService.findInscriptionBySpecification(searchDto);
  }

  @ApiResponse({ status: 200, description: 'Return all inscription by God and Season', type: [InscriptionDto] })
  @Get('/bySeasonAndCompetition/:seasonId/:competitionId')
  async getInscriptionBySeasonAndCompetition(
    @Param('seasonId') seasonId: number,
    @Param('competitionId') competitionId: number,
  ): Promise<InscriptionDto[]> {
    const searchDto: InscriptionSearchDto = InscriptionMapper.configureSearchDto(null, competitionId, seasonId);
    return await this.inscriptionService.findInscriptionBySpecification(searchDto);
  }

  @ApiBody({ description: 'Position', type: [InscriptionCreateDto] })
  @ApiResponse({ status: 200, description: 'Inscription created', type: [InscriptionDto] })
  @Post('/')
  async createInscription(@Body() inscriptionList: InscriptionCreateDto[]): Promise<InscriptionDto[]> {
    return await this.inscriptionService.createInscription(inscriptionList);
  }
}
