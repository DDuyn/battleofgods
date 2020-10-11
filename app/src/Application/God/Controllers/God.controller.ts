import { Controller, Inject, Get, Param } from '@nestjs/common';
import { IGodService } from 'src/Application/God/Services/Interfaces/IGod.service';
import GodDto from '../Dto/God.dto';

@Controller('god')
export class GodController {
  constructor(
    @Inject('IGodService') private readonly godService: IGodService,
  ) {}

  @Get('/gods')
  async getAllGods(): Promise<GodDto[]> {
    return await this.godService.findAll();
  }

  @Get('/:godName')
  async getGodByName(@Param('godName') godName: string): Promise<GodDto> {
    return await this.godService.findByName(godName);
  }
}
