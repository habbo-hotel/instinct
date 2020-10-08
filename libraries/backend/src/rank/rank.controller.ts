import {RankPipe} from './rank.pipe';
import {RankService} from './rank.service';
import {Rank} from 'instinct-interfaces';
import {Controller, Get, Param} from '@nestjs/common';
import {RankEntity, rankWire} from '../database/entity/rank';

@Controller('ranks')
export class RankController {
  constructor(private readonly rankService: RankService) {}

  @Get()
  async getMany(): Promise<Rank[]> {
    const ranks: RankEntity[] = await this.rankService.getAll();
    return ranks.map(rank => rankWire(rank));
  }

  @Get('staff')
  async getStaff(): Promise<Rank[]> {
    const ranks: RankEntity[] = await this.rankService.getStaff();
    return ranks.map(rank => rankWire(rank));
  }

  @Get(':rankID')
  getByID(@Param('rankID', RankPipe) rank: RankEntity): Rank {
    return rankWire(rank);
  }
}
