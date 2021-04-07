import { Body, Controller, Get, Inject, Param, Post, Put } from '@nestjs/common';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import PointsDto from 'src/Application/Points/Dto/Points.dto';
import PointsCreateDto from 'src/Application/Points/Dto/PointsCreate.dto';
import PointsSearchDto from 'src/Application/Points/Dto/PointsSearch.dto';
import PointsUpdateDto from 'src/Application/Points/Dto/PointsUpdate.dto';
import { PointsMapper } from 'src/Application/Points/Mappers/Points.mapper';
import { IPointsService } from 'src/Application/Points/Services/Interfaces/IPoints.service';

@ApiTags('points')
@Controller('points')
export class PointsController {
  constructor(@Inject('IPointsService') private readonly pointsService: IPointsService) {}

  @ApiResponse({ status: 200, description: 'Return all points', type: [PointsDto] })
  @Get('/')
  async getAllPoints(): Promise<PointsDto[]> {
    return await this.pointsService.findAll();
  }

  @ApiResponse({ status: 200, description: 'Get by Type Competition', type: [PointsDto] })
  @Get('/:typeCompetitionId')
  async getPointsByTypeCompetition(@Param('typeCompetitionId') typeCompetitionId: number): Promise<PointsDto[]> {
    const searchDto: PointsSearchDto = PointsMapper.configureSearchDto(+typeCompetitionId);
    return await this.pointsService.findBySpecification(searchDto);
  }

  @ApiResponse({ status: 200, description: 'Get by Type Competition and Round', type: [PointsDto] })
  @Get('/:typeCompetitionId/:roundId')
  async getPointsByTypeCompetitionAndRound(
    @Param('typeCompetitionId') typeCompetitionId: number,
    @Param('roundId') roundId: number,
  ): Promise<PointsDto[]> {
    const searchDto: PointsSearchDto = PointsMapper.configureSearchDto(+typeCompetitionId, +roundId);
    return await this.pointsService.findBySpecification(searchDto);
  }

  @ApiResponse({ status: 200, description: 'Create points', type: [PointsDto] })
  @ApiBody({ description: 'List of points to create', type: [PointsCreateDto] })
  @Post('/')
  async create(@Body() pointsDto: PointsCreateDto[]): Promise<PointsDto[]> {
    return await this.pointsService.create(pointsDto);
  }

  @ApiResponse({ status: 200, description: 'Update points', type: [PointsDto] })
  @ApiBody({ description: 'New points', type: PointsUpdateDto })
  @Put('/:typeCompetitionId/:roundId')
  async update(
    @Param('typeCompetitionId') typeCompetitionId: number,
    @Param('roundId') roundId: number,
    @Body() pointsDto: PointsUpdateDto,
  ): Promise<PointsDto> {
    return await this.pointsService.update(roundId, typeCompetitionId, pointsDto);
  }
}
