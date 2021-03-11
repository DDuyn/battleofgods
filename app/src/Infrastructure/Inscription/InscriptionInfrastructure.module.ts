import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { InscriptionModel } from 'src/Domain/Inscription/Model/Inscription';
import { UtilsHelperRepository } from 'src/Infrastructure/Utils/Utils.helper';
import { InscriptionRepository } from './repositories/Inscription.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Inscription',
        schema: InscriptionModel,
      },
    ]),
  ],
  providers: [
    {
      provide: 'IInscriptionRepository',
      useClass: InscriptionRepository,
    },
    {
      provide: 'UtilsHelperRepository',
      useClass: UtilsHelperRepository,
    },
  ],
  exports: [
    {
      provide: 'IInscriptionRepository',
      useClass: InscriptionRepository,
    },
  ],
})
export class InscriptionInfrastructureModule {}
