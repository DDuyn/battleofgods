import { Module } from "@nestjs/common";
import { SeasonModule } from "src/Domain/Season/Season.module";
import { SeasonInfrastructureModule } from "src/Infrastructure/Season/SeasonInfrastructure.module";
import { UtilsApplicationModule } from "../Utils/UtilsApplication.module";
import { SeasonService } from "./Services/Season.service";
import { CounterApplicationModule } from '../Counter/CounterApplication.module';
import { SeasonHelper } from "./Services/Helper/Season.helper";


@Module({
    providers: [
        {
            provide: 'ISeasonService',
            useClass: SeasonService
        },
        {
            provide: 'SeasonHelper',
            useClass: SeasonHelper
        }
    ],
    exports: [
        {
            provide: 'ISeasonService',
            useClass: SeasonService
        }
    ],
    imports: [SeasonModule, SeasonInfrastructureModule, UtilsApplicationModule, CounterApplicationModule]
})

export class SeasonApplicationModule { }