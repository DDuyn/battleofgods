import { Module } from "@nestjs/common";

@Module({
    exports: [SeasonModule]
})

export class SeasonModule { }