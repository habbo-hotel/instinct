import {RankService} from './rank.service';
import {RankEntity} from '../database/entity/rank';
import {PipeTransform, Injectable, NotFoundException} from '@nestjs/common';

@Injectable()
export class RankPipe implements PipeTransform {
  constructor(private readonly rankService: RankService) {}

  async transform(rankID: number): Promise<RankEntity> {
    try {
      return await this.rankService.getByID(rankID);
    } catch (e) {
      throw new NotFoundException('Rank does not exist');
    }
  }
}
