import { Inject, Injectable } from "@nestjs/common";
import MatchDto from "../Dto/Match.dto";
import { IMatchService } from "./Interfaces/IMatch.service";
import { IMatchRepository } from 'src/Domain/Match/Repositorires/IMatch.repository';
import { MatchMapper } from '../Mappers/Match.mapper';
import { Match } from 'src/Domain/Match/Model/Match';
import MatchCreateDto from "../Dto/MatchCreate.dto";
import { MatchHelper } from "./Helpers/Match.helper";
import { MODELS } from '../../../Utils/Constants/Enum/Models.Enum';

@Injectable()
export class MatchService implements IMatchService {
    constructor(
        @Inject('IMatchRepository') private readonly matchRepository: IMatchRepository,        
        @Inject('MatchHelper') private readonly matchHelper: MatchHelper
    ) {}
    async findAll(): Promise<MatchDto[]> {
        const matchList: Match[] = await this.matchRepository.findAll();
        return MatchMapper.fromEntityListToDto(matchList);
    }
    async createMatch(matchDto: MatchCreateDto): Promise<MatchDto> {                
        matchDto.matchId = await this.matchHelper.getNextSequenceValue(MODELS.MATCH);
        const matchEntity = await this.matchHelper.createEntityMatch(matchDto);
        const matchCreated: Match = await this.matchRepository.createMatch(matchEntity);
        return MatchMapper.fromEntityToDto(matchCreated);
    }
}