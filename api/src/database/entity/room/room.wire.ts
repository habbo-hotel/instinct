import { RoomEntity } from './';
import { userWire } from '../user';
import { Room } from 'fashionkilla-interfaces';

export function roomWire(roomEntity: RoomEntity): Room {
  return {
    id: roomEntity.id!,
    user: userWire(roomEntity.owner!),
    name: roomEntity.name,
    desc: roomEntity.description,
    currentUsers: roomEntity.users,
    maxUsers: roomEntity.usersMax,
  };
}
