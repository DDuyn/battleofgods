import { Season } from "src/Domain/Season/Model/Season";
import SeasonDto from "../Dto/Season.dto";

export class SeasonMapper {
    public static fromEntityToDto(seasonEntity: Season, showId = false): SeasonDto {
        const seasonDto: SeasonDto = {
            season: seasonEntity.season,
            competitionPlayed: seasonEntity.competitionPlayed,
            totalCompetition: seasonEntity.totalCompetition,
            isFinished: seasonEntity.isFinished
        }
        if (showId) seasonDto._id = seasonEntity._id;
        return seasonDto;
    }

    public static fromEntityListToDto(seasonEntity: Season[]): SeasonDto[] {
        const seasonListDto: SeasonDto[] = [];
        seasonEntity.forEach(x => {
            seasonListDto.push(SeasonMapper.fromEntityToDto(x));
        });
        return seasonListDto;
    }
}