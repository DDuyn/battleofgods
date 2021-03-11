import { Inscription } from '../../../Domain/Inscription/Model/Inscription';
import InscriptionDto from '../Dto/Inscription.dto';
import InscriptionCreateDto from '../Dto/InscriptionCreate.dto';
import InscriptionSearchDto from '../Dto/InscriptionSearch.dto';

export class InscriptionMapper {
  public static fromEntityToDto(inscriptionEntity: Inscription): InscriptionDto {
    const inscriptionDto: InscriptionDto = {
      godId: inscriptionEntity.god.godId,
      godName: inscriptionEntity.god.name,
      competitionId: inscriptionEntity.competition.competitionId,
      competitionName: inscriptionEntity.competition.name,
      seasonId: inscriptionEntity.season.season,
    };

    return inscriptionDto;
  }
  public static fromEntityListToDto(inscriptionList: Inscription[]): InscriptionDto[] {
    const inscriptionDto: InscriptionDto[] = [];
    inscriptionList.forEach(inscription => {
      inscriptionDto.push(InscriptionMapper.fromEntityToDto(inscription));
    });
    return inscriptionDto;
  }

  public static fromDtoToEntity(inscriptionDto: InscriptionCreateDto): Inscription {
    const inscription: Inscription = {
      god: inscriptionDto.god,
      competition: inscriptionDto.competition,
      season: inscriptionDto.season,
    };
    return inscription;
  }

  public static fromDtoListToEntityList(inscriptionListDto: InscriptionCreateDto[]): Inscription[] {
    const inscriptionList: Inscription[] = [];
    inscriptionListDto.forEach(inscriptionDto => {
      inscriptionList.push(InscriptionMapper.fromDtoToEntity(inscriptionDto));
    });
    return inscriptionList;
  }

  public static configureSearchDto(godId: number = null, competitionId: number = null, seasonId: number = null): InscriptionSearchDto {
    const searchDto: InscriptionSearchDto = {
      godId: godId,
      competitionId: competitionId,
      seasonId: seasonId,
    };
    return searchDto;
  }
}
