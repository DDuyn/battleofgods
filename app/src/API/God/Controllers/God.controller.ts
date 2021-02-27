import { Controller, Inject, Get, Param, Post, Body } from '@nestjs/common';
import { IGodService } from 'src/Application/God/Services/Interfaces/IGod.service';
import { ApiTags, ApiParam, ApiResponse, ApiBody } from '@nestjs/swagger';
import GodDto from 'src/Application/God/Dto/God.dto';
import GodCreateDto from 'src/Application/God/Dto/GodCreate.dto';

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
    return await this.godService.findAll(false);
  }

  @ApiParam({ name: 'godName', description: 'Name of God', type: 'string' })
  @ApiResponse({ status: 200, description: 'Return a God', type: GodDto })
  @Get('/:godName')
  async getGodByName(@Param('godName') godName: string): Promise<GodDto> {
    return await this.godService.findByName(godName);
  }

  @ApiBody({ description: 'God', type: GodCreateDto })
  @ApiResponse({ status: 200, description: 'God Created', type: GodDto })
  @Post('/')
  async createGod(@Body() god: GodCreateDto): Promise<GodDto> {
    return await this.godService.createGod(god);
  }
}
