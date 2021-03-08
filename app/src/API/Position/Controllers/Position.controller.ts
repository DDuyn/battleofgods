import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import PositionDto from 'src/Application/Position/Dto/Position.dto';
import PositionCreateDto from 'src/Application/Position/Dto/PositionCreate.dto';
import { IPositionService } from 'src/Application/Position/Services/Interfaces/IPosition.service';

@ApiTags('position')
@Controller('position')
export class PositionController {
  constructor(@Inject('IPositionService') private readonly positionService: IPositionService) {}

  @ApiResponse({ status: 200, description: 'Return all positions', type: [PositionDto] })
  @Get('/')
  async getAllPosition(): Promise<PositionDto[]> {
    return await this.positionService.findAll();
  }

  @ApiResponse({ status: 200, description: 'Return all positions by god', type: [PositionDto] })
  @Get('/:godId')
  async getPositionByGod(@Param('godId') godId: number): Promise<PositionDto[]> {
    return await this.positionService.findPositionByGod(godId);
  }

  @ApiResponse({ status: 200, description: 'Return all positions by god and Season', type: [PositionDto] })
  @Get('/:godId/:seasonId')
  async getPositionByGodAndSeason(@Param('godId') godId: number, @Param('seasonId') seasonId: number): Promise<PositionDto[]> {
    return await this.positionService.findPositionByGodAndSeason(godId, seasonId);
  }

  @ApiBody({ description: 'Position', type: PositionCreateDto })
  @ApiResponse({ status: 200, description: 'Position created', type: PositionDto })
  @Post('/')
  async createPosition(@Body() position: PositionCreateDto): Promise<PositionDto> {
    return await this.positionService.createPosition(position);
  }
}
