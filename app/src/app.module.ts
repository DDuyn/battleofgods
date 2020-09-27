import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { DomainModule } from './Domain/domain.module';
import { InfrastructureModule } from './Infrastructure/Infrastructure.module';
import { ApplicationModule } from './Application/Application.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://admin20:admin@cluster0.cj6ks.mongodb.net/battleofgods?retryWrites=true&w=majority',
    ),
    DomainModule,
    InfrastructureModule,
    ApplicationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
