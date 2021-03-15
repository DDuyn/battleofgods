import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RegionModel } from 'src/Domain/Region/Model/Region';
import { RegionRepository } from './Repositories/Region.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Region',
        schema: RegionModel,
      },
    ]),
  ],
  providers: [
    {
      provide: 'IRegionRepository',
      useClass: RegionRepository,
    },
  ],
  exports: [
    {
      provide: 'IRegionRepository',
      useClass: RegionRepository,
    },
  ],
})
export class RegionInfrastructureModule {}
