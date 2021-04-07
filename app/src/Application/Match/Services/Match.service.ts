import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Match } from 'src/Domain/Match/Model/Match';
import { IMatchRepository } from 'src/Domain/Match/Repositorires/IMatch.repository';
import { Models } from '../../../Utils/Constants/Enum/Models.Enum';
import MatchDto from '../Dto/Match.dto';
import MatchCreateDto from '../Dto/MatchCreate.dto';
import { MatchMapper } from '../Mappers/Match.mapper';
import { MatchHelper } from './Helpers/Match.helper';
import { IMatchService } from './Interfaces/IMatch.service';

@Injectable()
export class MatchService implements IMatchService {
  constructor(
    @Inject('IMatchRepository') private readonly matchRepository: IMatchRepository,
    @Inject('MatchHelper') private readonly matchHelper: MatchHelper,
  ) {}
  async findAll(): Promise<MatchDto[]> {
    const matchList: Match[] = await this.matchRepository.findAll();
    if (this.matchHelper.isArrayNull(matchList)) throw new NotFoundException();
    return MatchMapper.fromEntityListToDto(matchList);
  }
  async findMatchById(matchId: number): Promise<MatchDto> {
    const match: Match = await this.matchRepository.findMatchById(matchId);
    if (this.matchHelper.isNull(match)) throw new NotFoundException();
    return MatchMapper.fromEntityToDto(match);
  }
  async createMatch(matchDto: MatchCreateDto): Promise<MatchDto> {
    matchDto.matchId = await this.matchHelper.getNextSequenceValue(Models.MATCH);
    const matchEntity = await this.matchHelper.createEntityMatch(matchDto);
    const matchCreated: Match = await this.matchRepository.createMatch(matchEntity);
    return MatchMapper.fromEntityToDto(matchCreated);
  }
}
