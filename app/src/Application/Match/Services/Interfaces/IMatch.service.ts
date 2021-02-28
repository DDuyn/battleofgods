import MatchDto from "../../Dto/Match.dto";
import MatchCreateDto from "../../Dto/MatchCreate.dto";

export interface IMatchService { 
    findAll(): Promise<MatchDto[]>;
    createMatch(match: MatchCreateDto): Promise<MatchDto>;    
    //TODO: Crear más servicios
}