/* eslint-disable @typescript-eslint/no-var-requires */
import { Module } from '@nestjs/common';
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
          connectionFactory: (connection) => {
            connection.plugin(require('mongoose-autopopulate'));
            return connection;
          }
        };      
      },
      inject: [DatabaseConnectionService],
    }),
    DomainModule,
    InfrastructureModule,
    ApplicationModule,
  ],
})
export class AppModule {}
