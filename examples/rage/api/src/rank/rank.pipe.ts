import { InjectRepository } from '@nestjs/typeorm';
import { RankEntity, RankRepository } from '../database/rage/rank';
import {PipeTransform, Injectable, NotFoundException} from '@nestjs/common';

@Injectable()
export class RankPipe implements PipeTransform {
  constructor(@InjectRepository(RankRepository) private readonly rankRepo: RankRepository) {}

  async transform(rankID: number): Promise<RankEntity> {
    try {
      return await this.rankRepo.findOneByIDOrFail(rankID);
    } catch (e) {
      throw new NotFoundException('Rank does not exist');
    }
  }
}
