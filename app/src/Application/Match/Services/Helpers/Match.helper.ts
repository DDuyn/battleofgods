import { Inject, Injectable } from "@nestjs/common";
import { IGodService } from "src/Application/God/Services/Interfaces/IGod.service";
import GodDto from 'src/Application/God/Dto/God.dto';
import MatchCreateDto from "../../Dto/MatchCreate.dto";
import { Match } from "src/Domain/Match/Model/Match";
import { ICompetitionService } from 'src/Application/Competition/Services/Interfaces/ICompetition.service';
import CompetitionDto from "src/Application/Competition/Dto/Competition.dto";
import RoundDto from "src/Application/Round/Dto/Round.dto";
import SeasonDto from 'src/Application/Season/Dto/Season.dto';
import { IRoundService } from "src/Application/Round/Services/Interfaces/IRound.service";
import { ISeasonService } from "src/Application/Season/Services/Interfaces/ISeason.service";
import { CONSTANTS } from "src/Utils/Constants/Constants";
import { HelperService } from "src/Application/Utils/Services/Helper.service";
import { ICounterService } from "src/Application/Counter/Services/Interfaces/ICounter.service";

@Injectable()
export class MatchHelper extends HelperService {
    constructor(
        @Inject('ICounterService') private readonly counterService: ICounterService,
        @Inject('IGodService') private readonly godService: IGodService,
        @Inject('ICompetitionService') private readonly competitionService: ICompetitionService,
        @Inject('IRoundService') private readonly roundService: IRoundService,
        @Inject('ISeasonService') private readonly seasonService: ISeasonService

    ) {
        super();
    }

    getNextSequenceValue(model: string): Promise<number> {
        return this.counterService.getNextSequenceValue(model);
    }
    private async getGodBattler(godId: number): Promise<GodDto> {
        return await this.godService.findByGodId(godId, CONSTANTS.SHOWID);
    }

    private async getCompetition(competionId: number): Promise<CompetitionDto> {
        return await this.competitionService.findById(competionId, CONSTANTS.SHOWID);
    }

    private async getRound(roundId: number): Promise<RoundDto> {
        return await this.roundService.findByRoundId(roundId, CONSTANTS.SHOWID);
    }

    private async getSeason(seasonId: number): Promise<SeasonDto> {
        return await this.seasonService.findBySeason(seasonId, CONSTANTS.SHOWID);
    }

    private whoIsWinner(idFirstBattler: number, idSecondBattler: number, idWinner: number): number {
        return (idWinner === idFirstBattler) ? idFirstBattler : idSecondBattler;
    }

    async createEntityMatch(matchDto: MatchCreateDto): Promise<Match> {
        //TODO: Validaciones crear un Match
        const firstBattler: GodDto = await this.getGodBattler(matchDto.idFirstBattler);
        const secondBattler: GodDto = await this.getGodBattler(matchDto.idSecondBattler);
        const competition: CompetitionDto = await this.getCompetition(matchDto.idCompetition);
        const round: RoundDto = await this.getRound(matchDto.idRound);
        const season: SeasonDto = await this.getSeason(matchDto.idSeason);
        const idWinner: number = this.whoIsWinner(matchDto.idFirstBattler, matchDto.idSecondBattler, matchDto.idWinner);
        const winner: GodDto = ( idWinner === matchDto.idFirstBattler) ? firstBattler : secondBattler;
        const matchEntity: Match = {
            matchId: matchDto.matchId,
            firstBattler: firstBattler,
            secondBattler: secondBattler,
            competition: competition,
            round: round,
            season: season,
            winner: winner             
        }
        return matchEntity;
    }
}