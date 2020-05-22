import { EntityRepository, Repository } from 'typeorm';
import { UserBadgeEntity } from './user-badges.entity';

@EntityRepository(UserBadgeEntity)
export class UserBadgeRepository extends Repository<UserBadgeEntity> {

  readonly eagerRelations: string[] = [];

}