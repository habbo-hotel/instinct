import {EntityRepository, Repository} from 'typeorm';
import {UserRPStatsEntity} from './user-rp-stats.entity';

@EntityRepository(UserRPStatsEntity)
export class UserRPStatsRepository extends Repository<UserRPStatsEntity> {
  readonly eagerRelations: string[] = [];
}
