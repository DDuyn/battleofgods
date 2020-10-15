import { Module } from "@nestjs/common";
import { SeasonRepositoryModule } from "src/Infrastructure/Season/SeasonRepository.module";

@Module({
    imports: [SeasonRepositoryModule]
})

export class SeasonModule { }