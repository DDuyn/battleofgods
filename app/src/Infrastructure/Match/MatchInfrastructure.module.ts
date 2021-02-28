import { Module } from "@nestjs/common";
import { MongooseModule } from '@nestjs/mongoose';
import { MatchModel } from "src/Domain/Match/Model/Match";
import { MatchRepository } from "./Repositories/Match.repository";


@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: 'Match',
                schema: MatchModel
            }
        ])
    ],
    providers: [
        {
            provide: 'IMatchRepository',
            useClass: MatchRepository
        }
    ],
    exports: [
        {
            provide: 'IMatchRepository',
            useClass: MatchRepository
        }
    ]
})
export class MatchInfrastructureModule {}