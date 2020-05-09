import {userWire} from '../user';
import {RankEntity} from './rank.entity';
import {Rank} from 'instinct-interfaces-interfaces';
import {PermissionStatus} from './rank.types';

export function rankWire(rankEntity: RankEntity): Rank {
  return {
    id: rankEntity.id!,
    name: rankEntity.name,
    badge: rankEntity.badge,
    users: rankEntity.users !== undefined ? rankEntity.users!.map(user => userWire(user)) : undefined,
    permissions: {
      websiteShowStaff: rankEntity.websiteShowStaff === PermissionStatus.Enabled,
      websiteShowAdminPanel: rankEntity.websiteShowAdminPanel === PermissionStatus.Enabled,
    },
  };
}
