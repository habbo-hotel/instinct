import {GangEntity, gangFactory} from '../gang';
import {GangRankEntity} from './gang-rank.entity';
import {getRepository} from 'typeorm';

export async function gangRankFactory(changes?: Partial<GangRankEntity>): Promise<GangRankEntity> {
  const gang: GangEntity = changes?.gang ?? (await gangFactory());

  return getRepository(GangRankEntity).save({
    id: undefined,
    gang,
    rankID: 1,
    name: 'Test Rank',
    canRecruit: 1,
    canDemote: 1,
    canPromote: 1,
    canKick: 1,
    canAlert: 1,
    ...changes,
  });
}
