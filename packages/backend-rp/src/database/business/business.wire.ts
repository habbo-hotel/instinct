import {userWire} from '@instinct-prj/backend';
import {BusinessEntity} from './business.entity';
import {Business} from '@instinct-prj/interface-rp';

export function businessWire(entity: BusinessEntity): Business {
  return {
    id: entity.id!,
    owner: userWire(entity.user!),
    name: entity.name,
    desc: entity.desc,
    badge: entity.badge,
    positions: [],
  };
}
