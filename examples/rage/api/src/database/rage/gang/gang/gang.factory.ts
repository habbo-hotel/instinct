import {getRepository} from 'typeorm';
import {GangEntity} from './gang.entity';
import {UserEntity} from '../../user/user/user.entity';
import {userFactory} from '../../user/user/user.factory';

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
