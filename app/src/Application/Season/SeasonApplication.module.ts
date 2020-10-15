import { Module } from "@nestjs/common";
import { SeasonModule } from "src/Domain/Season/Season.module";
import { SeasonRepositoryModule } from "src/Infrastructure/Season/SeasonRepository.module";
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
    imports: [SeasonModule, SeasonRepositoryModule]
})

export class SeasonApplicationModule { }