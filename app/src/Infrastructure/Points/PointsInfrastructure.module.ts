import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PointsModel } from '../../Domain/Points/Model/Points';
import { UtilsHelperRepository } from '../Utils/Utils.helper';
import { PointsRepository } from './Repositories/Points.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Points',
        schema: PointsModel,
      },
    ]),
  ],
  providers: [
    {
      provide: 'IPointsRepository',
      useClass: PointsRepository,
    },
    {
      provide: 'UtilsHelperRepository',
      useClass: UtilsHelperRepository,
    },
  ],
  exports: [
    {
      provide: 'IPointsRepository',
      useClass: PointsRepository,
    },
  ],
})
export class PointsInfrastructureModule {}
