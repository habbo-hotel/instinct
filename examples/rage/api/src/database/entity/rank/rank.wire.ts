import {userWire} from '../user';
import {RankEntity} from './rank.entity';
import {Rank} from 'instinct-rp-interfaces';

export function rankWire(rankEntity: RankEntity): Rank {
  return {
    id: rankEntity.id!,
    name: rankEntity.name,
    badge: rankEntity.badge,
    users: rankEntity.users !== undefined ? rankEntity.users!.map(user => userWire(user)) : undefined,
    permissions: {
      websiteShowStaff: false,
      websiteShowAdminPanel: false,
    },
  };
}
