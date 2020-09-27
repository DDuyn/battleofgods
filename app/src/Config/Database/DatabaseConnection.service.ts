import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class DatabaseConnectionService {
  public readonly connectionString: string;
  public readonly dbUser: string;

  constructor(private readonly configService: ConfigService) {
    this.connectionString = this.configService.get<string>(
      'DB_CONNECTION_STRING',
    );

    this.dbUser = this.configService.get<string>('DATABASE_USER');
  }
}
