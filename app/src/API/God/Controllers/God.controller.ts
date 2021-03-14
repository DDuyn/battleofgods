import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { ApiBody, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import GodDto from 'src/Application/God/Dto/God.dto';
import GodCreateDto from 'src/Application/God/Dto/GodCreate.dto';
import { IGodService } from 'src/Application/God/Services/Interfaces/IGod.service';
import { CONSTANTS } from 'src/Utils/Constants/Constants';

@ApiTags('god')
@Controller('god')
export class GodController {
  constructor(@Inject('IGodService') private readonly godService: IGodService) {}

  @ApiResponse({
    status: 200,
    description: 'Return list of gods',
    type: GodDto,
  })
  @Get('/')
  async getAllGods(): Promise<GodDto[]> {
    return await this.godService.findAll(CONSTANTS.NOTSHOWID);
  }

  @ApiParam({ name: 'godName', description: 'Name of God', type: 'string' })
  @ApiResponse({ status: 200, description: 'Return a God', type: GodDto })
  @ApiResponse({ status: 404, description: 'God Not Found' })
  @Get('/name/:godName')
  async getGodByName(@Param('godName') godName: string): Promise<GodDto> {
    return await this.godService.findByName(godName);
  }

  @ApiParam({ name: 'godId', description: 'Id of God', type: 'number' })
  @ApiResponse({ status: 200, description: 'Return a God', type: GodDto })
  @ApiResponse({ status: 404, description: 'God Not Found' })
  @Get('/id/:godId')
  async getGodById(@Param('godId') godId: number): Promise<GodDto> {
    return await this.godService.findByGodId(godId, CONSTANTS.NOTSHOWID);
  }

  @ApiBody({ description: 'God', type: GodCreateDto })
  @ApiResponse({ status: 200, description: 'God Created', type: GodDto })
  @Post('/')
  async createGod(@Body() god: GodCreateDto): Promise<GodDto> {
    return await this.godService.createGod(god);
  }
}
