import GodDto from '../../Dto/God.dto';
import GodCreateDto from 'src/Application/God/Dto/GodCreate.dto';
export interface IGodService {
  findAll(isForRanking: boolean): Promise<GodDto[]>;
  findByName(godName: string): Promise<GodDto>;
  createGod(god: GodCreateDto): Promise<GodDto>;
  findByGodId(godId: number, showId: boolean): Promise<GodDto>;
}
