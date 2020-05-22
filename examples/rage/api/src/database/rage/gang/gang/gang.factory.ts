import {GangEntity} from './gang.entity';
import {getRepository} from 'typeorm';
import {UserEntity, userFactory} from '../../user/user';

export async function gangFactory(changes?: Partial<GangEntity>): Promise<GangEntity> {
  const owner: UserEntity = changes?.owner ?? (await userFactory());

  return getRepository(GangEntity).save({
    id: undefined,
    owner,
    name: 'Test Gang',
    kills: 0,
    deaths: 0,
    points: 0,
    users: [],
    ranks: [],
    ...changes,
  });
}
