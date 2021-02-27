import { Module } from "@nestjs/common";
import { CompetitionModule } from "../Competition/Competition.module";
import { GodModule } from "../God/God.module";
import { RoundModule } from "../Round/Round.module";
import { SeasonModule } from "../Season/Season.module";
 
@Module({
    exports: [MatchModule],
    imports: [GodModule, CompetitionModule, RoundModule, SeasonModule]

})
export class MatchModule {}