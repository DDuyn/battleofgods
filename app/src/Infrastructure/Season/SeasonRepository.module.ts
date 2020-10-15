import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { SeasonModel } from "./Entities/Season.entity";
import { SeasonRepository } from "./Repositories/Season.repository";

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: 'Season',
                schema: SeasonModel
            }
        ])
    ],
    providers: [
        {
            provide: 'ISeasonRepository',
            useClass: SeasonRepository
        }
    ],
    exports: [
        {
            provide: 'ISeasonRepository',
            useClass: SeasonRepository
        }
    ],
})

export class SeasonRepositoryModule { }