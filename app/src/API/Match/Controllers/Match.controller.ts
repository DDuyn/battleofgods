import { Body, Controller, Get, Inject, Post } from "@nestjs/common";
import { ApiBody, ApiResponse, ApiTags } from "@nestjs/swagger";
import MatchDto from "src/Application/Match/Dto/Match.dto";
import MatchCreateDto from "src/Application/Match/Dto/MatchCreate.dto";
import { IMatchService } from "src/Application/Match/Services/Interfaces/IMatch.service";


@ApiTags('match')
@Controller('match')
export class MatchController {
    constructor(
        @Inject('IMatchService') private readonly matchService: IMatchService
    ) {}
    @ApiResponse({ status: 200, description: 'Return Matches', type: [MatchDto]})
    @Get('/')
    async getAllMatch(): Promise<MatchDto[]> {
        return await this.matchService.findAll();
    }
    @ApiBody({ description: 'Match', type: MatchCreateDto })
    @ApiResponse({ status: 200, description: 'Match Created', type: MatchCreateDto })
    @Post('/')
    async createMatch(@Body() match: MatchCreateDto): Promise<MatchCreateDto> {
      return await this.matchService.createMatch(match);
    }
}