/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import {
  Controller,
  Inject,
  Get,
  Res,
  HttpStatus,
  Param,
} from '@nestjs/common';
import { IGodService } from 'src/Domain/God/Services/Interfaces/IGod.service';
import { GodMapper } from '../Mappers/God.mapper';

@Controller('god')
export class GodController {
  constructor(
    @Inject('IGodService') private readonly godService: IGodService,
  ) {}

  @Get('/gods')
  async getAllGods(@Res() res) {
    const gods = await this.godService.findAll();
    res.status(HttpStatus.OK).json(GodMapper.fromEntityListToDto(gods));
  }

  @Get('/:godName')
  async getGodByName(@Res() res, @Param('godName') godName: string) {
    const god = await this.godService.findByName(godName);
    res.status(HttpStatus.OK).json(GodMapper.fromEntityToDto(god));
  }
}
