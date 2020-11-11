import {GangEntity} from './gang.entity';
import {userWire} from '@instinct-prj/backend';
import {Gang} from '@instinct-prj/interface-rp';

export function gangWire(entity: GangEntity): Gang {
  return {
    id: entity.id!,
    name: entity.name,
    badge: entity.emblem,
    owner: userWire(entity.user!),
    ranks: entity.ranks!.map(_ => ({
      id: _.id!,
      gangID: _.gangID,
      name: _.name,
      canFire: _.canFire === 1,
      canHire: _.canHire === 1,
      canPromote: _.canPromote === 1,
      canDemote: _.canDemote === 1,
      users: _.users!.map(u => userWire(u.user!)),
    })),
  };
}
