import {UserBadgeEntity} from './user-badge.entity';
import {EntityRepository, Repository} from 'typeorm';

@EntityRepository(UserBadgeEntity)
export class UserBadgeRepository extends Repository<UserBadgeEntity> {
  readonly eagerRelations: string[] = [];
}
