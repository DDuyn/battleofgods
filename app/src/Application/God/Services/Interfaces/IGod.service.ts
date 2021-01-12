import GodDto from '../../Dto/God.dto';

export interface IGodService {
  findAll(): Promise<GodDto[]>;
  findByName(godName: string): Promise<GodDto>;
  createGod(god: GodDto): Promise<GodDto>;
}
