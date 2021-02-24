import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { ApiTags, ApiParam, ApiResponse, ApiBody } from '@nestjs/swagger';
import RoundDto from 'src/Application/Round/Dto/Round.dto';
import RoundCreateDto from 'src/Application/Round/Dto/RoundCreate.dto';
import { IRoundService } from 'src/Application/Round/Services/Interfaces/IRound.service';


@ApiTags('round')
@Controller('round')
export class RoundController {
  constructor(
    @Inject('IRoundService') private readonly roundService: IRoundService,
  ) {}

  @ApiResponse({
    status: 200,
    description: 'Return list of rounds',
    type: RoundDto,
  })
  @Get('/')
  async getAllRound(): Promise<RoundDto[]> {
    return await this.roundService.findAll();
  }

  @ApiParam({ name: 'description', type: 'string' })
  @ApiResponse({ status: 200, description: 'Return a Round', type: RoundDto })
  @Get('/:description')
  async getRoundByDescription(
    @Param('description') roundDescription: string,
  ): Promise<RoundDto> {
    return await this.roundService.findByDescription(roundDescription);
  }

  //TODO: Get By Id

  @ApiBody({ description: 'Create Round', type: RoundCreateDto })
  @ApiResponse({ status: 200, description: 'Created Rounds', type: RoundDto })
  @Post('/')
  async createRound(@Body() round: RoundCreateDto): Promise<RoundDto> {
    return await this.roundService.createRound(round);
  }  
}
