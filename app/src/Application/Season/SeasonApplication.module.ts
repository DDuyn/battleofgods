import { Module } from "@nestjs/common";
import { SeasonModule } from "src/Domain/Season/Season.module";
import { SeasonInfrastructureModule } from "src/Infrastructure/Season/SeasonInfrastructure.module";
import { SeasonController } from "./Controllers/Season.controller";
import { SeasonService } from "./Services/Season.service";


@Module({
    controllers: [SeasonController],
    providers: [
        {
            provide: 'ISeasonService',
            useClass: SeasonService
        }
    ],
    exports: [
        {
            provide: 'ISeasonService',
            useClass: SeasonService
        }
    ],
    imports: [SeasonModule, SeasonInfrastructureModule]
})

export class SeasonApplicationModule { }