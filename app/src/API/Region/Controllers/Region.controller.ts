import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { ApiBody, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import RegionDto from 'src/Application/Region/Dto/Region.dto';
import RegionCreateDto from 'src/Application/Region/Dto/RegionCreate.dto';
import { IRegionService } from 'src/Application/Region/Services/Interfaces/IRegion.service';
import { CONSTANTS } from '../../../Utils/Constants/Constants';

@ApiTags('region')
@Controller('region')
export class RegionController {
  constructor(@Inject('IRegionService') private readonly regionService: IRegionService) {}

  @ApiResponse({ status: 200, description: 'Get All Regions', type: [RegionDto] })
  @Get('/')
  async getAllRegions(): Promise<RegionDto[]> {
    return await this.regionService.findAll();
  }

  @ApiParam({ name: 'regionId', type: 'number', description: 'Region Id' })
  @ApiResponse({ status: 200, description: 'Get Region By Id', type: RegionDto })
  @ApiResponse({ status: 404, description: 'Region Not Found' })
  @Get('/:regionId')
  async getRegionById(@Param('regionId') regionId: number): Promise<RegionDto> {
    return await this.regionService.findById(regionId, CONSTANTS.NOTSHOWID);
  }

  @ApiBody({ description: 'Region', type: RegionCreateDto })
  @ApiResponse({ status: 200, description: 'Region created', type: RegionDto })
  @Post('/')
  async createRegion(@Body() regionDto: RegionCreateDto): Promise<RegionDto> {
    return await this.regionService.createRegion(regionDto);
  }
}
