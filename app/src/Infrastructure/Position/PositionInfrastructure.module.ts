import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PositionModel } from 'src/Domain/Position/Model/Position';
import { UtilsHelperRepository } from '../Utils/Utils.helper';
import { PositionRepository } from './Repositories/Position.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Position',
        schema: PositionModel,
      },
    ]),
  ],
  providers: [
    {
      provide: 'IPositionRepository',
      useClass: PositionRepository,
    },
    {
      provide: 'UtilsHelperRepository',
      useClass: UtilsHelperRepository,
    },
  ],
  exports: [
    {
      provide: 'IPositionRepository',
      useClass: PositionRepository,
    },
  ],
})
export class PositionInfrastructureModule {}
