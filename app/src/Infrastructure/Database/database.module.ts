import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://admin20:admin@cluster0.cj6ks.mongodb.net/BATTLEOFGODS?retryWrites=true&w=majority',
    ),
  ],
})
export class DatabaseModule {}
