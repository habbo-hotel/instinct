import {RankEntity} from '../database/rage/rank/rank/rank.entity';
import {RankRepository} from '../database/rage/rank/rank/rank.repository';
import {PipeTransform, Injectable, NotFoundException} from '@nestjs/common';

@Injectable()
export class RankPipe implements PipeTransform {
  constructor(private readonly rankRepo: RankRepository) {}

  async transform(rankID: number): Promise<RankEntity> {
    try {
      return await this.rankRepo.findOneByIDOrFail(rankID);
    } catch (e) {
      throw new NotFoundException('Rank does not exist');
    }
  }
}
