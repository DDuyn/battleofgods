import { Module } from "@nestjs/common";
import { SeasonController } from "src/Application/Season/Controllers/Season.controller";
import { SeasonApplicationModule } from "src/Application/Season/SeasonApplication.module";
import { SeasonInfrastructureModule } from 'src/Infrastructure/Season/SeasonInfrastructure.module';


@Module({
    controllers: [SeasonController],
    imports: [SeasonApplicationModule, SeasonInfrastructureModule]
})

export class SeasonAPIModule { }