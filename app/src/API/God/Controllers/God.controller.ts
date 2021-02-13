import { Controller, Inject, Get, Param, Post, Body } from '@nestjs/common';
import { IGodService } from 'src/Application/God/Services/Interfaces/IGod.service';
import GodDto from '../Dto/God.dto';
import { ApiTags, ApiParam, ApiResponse, ApiBody } from '@nestjs/swagger';

@ApiTags('god')
@Controller('god')
export class GodController {
  constructor(
    @Inject('IGodService') private readonly godService: IGodService,
  ) {}

  @ApiResponse({
    status: 200,
    description: 'Return list of gods',
    type: GodDto,
  })
  @Get('/')
  async getAllGods(): Promise<GodDto[]> {
    return await this.godService.findAll();
  }

  @ApiParam({ name: 'godName', description: 'Name of God', type: 'string' })
  @ApiResponse({ status: 200, description: 'Return a God', type: GodDto })
  @Get('/:godName')
  async getGodByName(@Param('godName') godName: string): Promise<GodDto> {
    return await this.godService.findByName(godName);
  }

  @ApiBody({ description: 'God', type: GodDto })
  @ApiResponse({ status: 200, description: 'God Created', type: GodDto })
  @Post('/')
  async createGod(@Body() god: GodDto): Promise<GodDto> {
    return await this.godService.createGod(god);
  }
}
