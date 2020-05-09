import {userWire} from '../user';
import {GangEntity} from './gang.entity';
import {Gang} from 'instinct-rp-interfaces';

export function gangWire(gangEntity: GangEntity): Gang {
  return {
    id: gangEntity.id!,
    name: gangEntity.name,
    kills: gangEntity.kills,
    deaths: gangEntity.dead,
    owner: userWire(gangEntity.owner!),
    users: gangEntity.users ? gangEntity.users.map(user => userWire(user)) : undefined,
  };
}
