import {getRepository} from 'typeorm';
import {RoomEntity} from './room.entity';
import { UserEntity, userFactory } from '../user/user';

export async function roomFactory(changes?: Partial<RoomEntity>): Promise<RoomEntity> {
  const owner: UserEntity = changes?.owner ?? await userFactory();

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
  })
}