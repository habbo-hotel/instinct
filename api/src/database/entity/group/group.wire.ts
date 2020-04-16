import * as Moment from 'moment';
import { userWire } from '../user';
import { GroupEntity } from './group.entity';
import { Group } from 'fashionkilla-interfaces';

export function groupWire(groupEntity: GroupEntity): Group {
  return {
    id: groupEntity.id!,
    name: groupEntity.name,
    desc: groupEntity.description,
    user: userWire(groupEntity.user!),
    badge: groupEntity.badge,
    roomID: groupEntity.roomID,
    dateCreated: Moment.unix(groupEntity.dateCreated).toISOString(),
  }
}