import { Body, Controller, Get, Inject, Param, Post, Put } from '@nestjs/common';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import TypeCompetitionDto from 'src/Application/TypeCompetition/Dto/TypeCompetition.dto';
import TypeCompetitionCreateDto from 'src/Application/TypeCompetition/Dto/TypeCompetitionCreate.dto';
import TypeCompetitionUpdateDto from 'src/Application/TypeCompetition/Dto/TypeCompetitionUpdate.dto';
import { ITypeCompetitionService } from 'src/Application/TypeCompetition/Services/Interface/ITypeCompetition.service';
import { CONSTANTS } from 'src/Utils/Constants/Constants';

@ApiTags('typecompetition')
@Controller('typecompetition')
export class TypeCompetitionController {
  constructor(@Inject('ITypeCompetitionService') private readonly typeCompetitionService: ITypeCompetitionService) {}

  @ApiResponse({ status: 200, description: 'Get All Type Competition', type: [TypeCompetitionDto] })
  @Get('/')
  async getAllTypeCompetition(): Promise<TypeCompetitionDto[]> {
    return await this.typeCompetitionService.findAll();
  }

  @ApiResponse({ status: 200, description: 'Get Type Competition By id', type: TypeCompetitionDto })
  @Get('/:typeCompetitionId')
  async getTypeCompetitionById(@Param('typeCompetitionId') typeCompetitionId: number): Promise<TypeCompetitionDto> {
    return await this.typeCompetitionService.findById(+typeCompetitionId, CONSTANTS.NOTSHOWID);
  }

  @ApiBody({ description: 'Type Competition', type: TypeCompetitionCreateDto })
  @ApiResponse({ status: 200, description: 'Type Competition created', type: TypeCompetitionDto })
  @Post('/')
  async createTypeCompetition(@Body() typeCompetitionDto: TypeCompetitionCreateDto): Promise<TypeCompetitionDto> {
    return await this.typeCompetitionService.create(typeCompetitionDto);
  }

  @ApiBody({ description: 'Type Competition', type: TypeCompetitionUpdateDto })
  @ApiResponse({ status: 200, description: 'Updated descripcion', type: TypeCompetitionDto })
  @Put('/:typeCompetitionId')
  async updateTypeCompetition(
    @Param('typeCompetitionId') typeCompetitionId: number,
    @Body() typeCompetitionDto: TypeCompetitionUpdateDto,
  ): Promise<TypeCompetitionDto> {
    return await this.typeCompetitionService.update(+typeCompetitionId, typeCompetitionDto);
  }
}
