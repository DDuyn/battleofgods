import { Module } from "@nestjs/common";
import { SeasonApplicationModule } from "src/Application/Season/SeasonApplication.module";
import { SeasonInfrastructureModule } from 'src/Infrastructure/Season/SeasonInfrastructure.module';
import { SeasonController } from "./Controllers/Season.controller";


@Module({
    controllers: [SeasonController],
    imports: [SeasonApplicationModule, SeasonInfrastructureModule]
})

export class SeasonAPIModule { }