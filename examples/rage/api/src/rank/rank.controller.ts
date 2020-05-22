import {RankPipe} from './rank.pipe';
import {Rank} from 'instinct-rp-interfaces';
import {InjectRepository} from '@nestjs/typeorm';
import {Controller, Get, Param} from '@nestjs/common';
import {RankEntity, RankRepository, rankWire} from '../database/rage/rank';

@Controller('ranks')
export class RankController {
  constructor(@InjectRepository(RankRepository) private readonly rankRepo: RankRepository) {}

  @Get()
  async getMany(): Promise<Rank[]> {
    const ranks: RankEntity[] = await this.rankRepo.getAll();
    return ranks.map(rank => rankWire(rank));
  }

  @Get('staff')
  async getStaff(): Promise<Rank[]> {
    const ranks: RankEntity[] = await this.rankRepo.getAllStaff();
    return ranks.map(rank => rankWire(rank));
  }

  @Get(':rankID')
  getByID(@Param('rankID', RankPipe) rank: RankEntity): Rank {
    return rankWire(rank);
  }
}
