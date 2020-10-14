import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { ISeasonRepository } from "src/Domain/Season/Repositories/ISeason.repository";
import { ISeasonEntity } from "../Entities/Season.entity";

@Injectable()
export class SeasonRepository implements ISeasonRepository {
    constructor(
        @InjectModel('Season') private seasonModel: Model<ISeasonEntity>,
    ) { }

    async findAll(): Promise<ISeasonEntity[]> {
        return await this.seasonModel.find();
    }

    async findBySeason(season: number): Promise<ISeasonEntity> {
        return await this.seasonModel.findOne({ season: season });
    }
}