import { RankPipe } from './rank.pipe';
import { Controller, Get, Param } from '@nestjs/common';
import { exampleRank, Rank } from 'fashionkilla-interfaces';
import { RankService } from './rank.service';
import { RankEntity, rankWire } from '../database/entity/rank';

@Controller('ranks')
export class RankController {
  constructor(private readonly rankService: RankService) {}

  @Get()
  async getMany(): Promise<Rank[]> {
    const ranks: RankEntity[] = await this.rankService.getAll();
    return ranks.map(rank => rankWire(rank));
  }

  @Get(':rankID')
  getByID(@Param('rankID', RankPipe) rank: RankEntity): Rank {
    return rankWire(rank);
  }
}
