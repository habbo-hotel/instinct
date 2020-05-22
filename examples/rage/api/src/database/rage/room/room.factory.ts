import {getRepository} from 'typeorm';
import {RoomEntity} from './room.entity';
import {UserEntity} from '../user/user/user.entity';
import {userFactory} from '../user/user/user.factory';

export async function roomFactory(changes?: Partial<RoomEntity>): Promise<RoomEntity> {
  const owner: UserEntity = changes?.owner ?? (await userFactory());

  return getRepository(RoomEntity).save({
    id: undefined,
    owner,
    name: 'Test',
    description: 'Test room',
    model: '0',
    password: '',
    users: 0,
    usersMax: 10,
    ...changes,
  });
}
