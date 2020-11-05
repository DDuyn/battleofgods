import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import RoundDto from '../Dto/Round.dto';
import { IRoundService } from '../Services/Interfaces/IRound.service';

@Controller('round')
export class RoundController {
  constructor(
    @Inject('IRoundService') private readonly roundService: IRoundService,
  ) {}

  @Get('/')
  async getAllRound(): Promise<RoundDto[]> {
    return await this.roundService.findAll();
  }

  @Get('/:description')
  async getRoundByDescription(
    @Param('description') roundDescription: string,
  ): Promise<RoundDto> {
    return await this.roundService.findByDescription(roundDescription);
  }

  @Post('/')
  async createRound(@Body() roundList: RoundDto[]): Promise<RoundDto[]> {
    return await this.roundService.createRound(roundList);
  }
}
