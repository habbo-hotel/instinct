import {Repository} from 'typeorm';
import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {RankScopeEntity} from './rank-scope.entity';
import {AUTH_SCOPE} from '../../../../auth/auth.types';

@Injectable()
export class RankScopeRepository {
  constructor(@InjectRepository(RankScopeEntity) private readonly rankScopeRepo: Repository<RankScopeEntity>) {}

  async doesRankHaveScope(rankID: number, scope: string): Promise<boolean> {
    const scopeInstance: RankScopeEntity | undefined = await this.rankScopeRepo.findOne({
      where: {
        rankID,
        scope,
      },
    });

    return scopeInstance !== undefined;
  }

  async addScopeToRank(rankID: number, scope: AUTH_SCOPE): Promise<void> {
    await this.rankScopeRepo.save({
      rankID,
      scope,
    });
  }

  async removeScopeFromRank(rankID: number, scope: AUTH_SCOPE): Promise<void> {
    await this.rankScopeRepo.createQueryBuilder().delete().where('rankID = :rankID', {rankID}).andWhere('scope = :scope', {scope}).execute();
  }
}
