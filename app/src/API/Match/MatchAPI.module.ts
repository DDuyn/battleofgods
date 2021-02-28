import { Module } from "@nestjs/common";
import { MatchApplicationModule } from "src/Application/Match/MatchApplication.module";
import { MatchInfrastructureModule } from "src/Infrastructure/Match/MatchInfrastructure.module";
import { MatchController } from "./Controllers/Match.controller";

@Module({
    controllers:[MatchController],
    imports: [MatchApplicationModule, MatchInfrastructureModule]    
})
export class MatchAPIModule {}