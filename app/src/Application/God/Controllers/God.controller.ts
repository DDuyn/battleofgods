import { Controller, Inject, Get, Param } from '@nestjs/common';
import { IGodService } from 'src/Application/God/Services/Interfaces/IGod.service';
import GodDto from '../Dto/God.dto';
import { ApiTags, ApiParam, ApiResponse } from '@nestjs/swagger';

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
  @Get('/gods')
  async getAllGods(): Promise<GodDto[]> {
    return await this.godService.findAll();
  }

  @ApiParam({ name: 'godName', description: 'Name of God', type: 'string' })
  @ApiResponse({ status: 200, description: 'Return a God', type: GodDto })
  @ApiResponse({ status: 404, description: 'God Not Found' })
  @Get('/:godName')
  async getGodByName(@Param('godName') godName: string): Promise<GodDto> {
    return await this.godService.findByName(godName);
  }
}
