import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule, MongooseModuleOptions } from '@nestjs/mongoose';
import { DomainModule } from './Domain/domain.module';
import { InfrastructureModule } from './Infrastructure/Infrastructure.module';
import { ApplicationModule } from './Application/Application.module';
import { ConfigModule } from '@nestjs/config';
import { DatabaseConnectionService } from './Config/Database/DatabaseConnection.service';
import { DatabaseModule } from './Config/Database/Database.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: './src/Enviroment/.env.development',
    }),
    MongooseModule.forRootAsync({
      imports: [DatabaseModule],
      useFactory: (database: DatabaseConnectionService) => {
        return <MongooseModuleOptions>{
          uri: database.connectionString,
          useNewUrlParser: true,
          useUnifiedTopology: true,
          useFindAndModify: false,
        };
      },
      inject: [DatabaseConnectionService],
    }),
    DomainModule,
    InfrastructureModule,
    ApplicationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
