import { Module } from "@nestjs/common";
import { MongooseModule } from '@nestjs/mongoose';
import { MatchModel } from "src/Domain/Match/Model/Match";


@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: 'Match',
                schema: MatchModel
            }
        ])
    ],
})
export class MatchInfrastructureModule {}