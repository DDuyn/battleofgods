/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Controller, Inject, Get, Res, HttpStatus } from '@nestjs/common';
import { IGodService } from 'src/Domain/God/Services/Interfaces/IGod.service';

@Controller('god')
export class GodController {
  constructor(
    @Inject('IGodService') private readonly godService: IGodService,
  ) {}

  @Get('/gods')
  async getAllGods(@Res() res) {
    const gods = await this.godService.findAll();
    console.log(gods);
    res.status(HttpStatus.OK).json(gods);
  }
}
