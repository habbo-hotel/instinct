import {getRepository} from 'typeorm';
import {UserEntity, userFactory} from '../user';
import {UserRPStatsEntity} from './user-rp-stats.entity';

export async function userRPStatsFactory(changes?: Partial<UserRPStatsEntity>): Promise<UserRPStatsEntity> {
  const user: UserEntity = changes?.user ?? (await userFactory());

  return getRepository(UserRPStatsEntity).save({
    id: undefined,
    user,
    jobID: 1,
    jobRankID: 1,
    ...changes,
  });
}
