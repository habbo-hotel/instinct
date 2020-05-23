import {RankPipe} from './rank.pipe';
import {Rank} from 'instinct-rp-interfaces';
import {Controller, Get, Param} from '@nestjs/common';
import {rankWire} from '../database/rage/rank/rank.wire';
import {RankEntity} from '../database/rage/rank/rank.entity';
import {RankRepository} from '../database/rage/rank/rank.repository';

@Controller('ranks')
export class RankController {
  constructor(private readonly rankRepo: RankRepository) {}

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
