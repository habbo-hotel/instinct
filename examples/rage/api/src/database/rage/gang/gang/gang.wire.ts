import {GangEntity} from './gang.entity';
import {Gang} from 'instinct-rp-interfaces';
import {userWire} from '../../user/user/user.wire';

export function gangWire(gangEntity: GangEntity): Gang {
  return {
    id: gangEntity.id!,
    name: gangEntity.name,
    kills: gangEntity.kills,
    deaths: gangEntity.deaths,
    owner: userWire(gangEntity.owner!),
    users: gangEntity.users ? gangEntity.users.map(user => userWire(user.user!)) : undefined,
  };
}
