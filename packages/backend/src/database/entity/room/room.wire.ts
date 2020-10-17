import {RoomEntity} from './';
import {userWire} from '../user';
import {Room} from '@instinct/interface';

export function roomWire(roomEntity: RoomEntity): Room {
  return {
    id: roomEntity.id!,
    user: roomEntity.owner ? userWire(roomEntity.owner!) : undefined,
    name: roomEntity.name,
    desc: roomEntity.description,
    currentUsers: roomEntity.users,
    maxUsers: roomEntity.usersMax,
  };
}
