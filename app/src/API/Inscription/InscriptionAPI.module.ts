import { Module } from '@nestjs/common';
import { InscriptionApplicationModule } from '../../Application/Inscription/InscriptionApplication.module';
import { InscriptionInfrastructureModule } from '../../Infrastructure/Inscription/InscriptionInfrastructure.module';
import { InscriptionController } from './Controllers/Inscription.controller';

@Module({
  controllers: [InscriptionController],
  imports: [InscriptionApplicationModule, InscriptionInfrastructureModule],
})
export class InscriptionAPIModule {}
