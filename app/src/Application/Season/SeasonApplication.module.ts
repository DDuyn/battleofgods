import { Module } from "@nestjs/common";
import { SeasonModule } from "src/Domain/Season/Season.module";
import { SeasonInfrastructureModule } from "src/Infrastructure/Season/SeasonInfrastructure.module";
import { UtilsApplicationModule } from "../Utils/UtilsApplication.module";
import { SeasonService } from "./Services/Season.service";


@Module({
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
    imports: [SeasonModule, SeasonInfrastructureModule, UtilsApplicationModule]
})

export class SeasonApplicationModule { }