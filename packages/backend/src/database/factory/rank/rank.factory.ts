import {getRepository} from 'typeorm';
import {RankEntity} from '../../entity/rank';

export function rankFactory(
  changes?: Partial<RankEntity>
): Promise<RankEntity> {
  return getRepository(RankEntity).save({
    name: 'Testing',
    badge: 'BETA',
    level: 1,
    ...changes,
  });
}
