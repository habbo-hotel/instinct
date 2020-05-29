import {RankEntity} from './rank.entity';
import {Rank} from 'instinct-rp-interfaces';
import {userWire} from '../../user/user/user.wire';
import {AUTH_SCOPE} from '../../../../auth/auth.types';

export function rankWire(rankEntity: RankEntity): Rank {
  return {
    id: rankEntity.id!,
    name: rankEntity.name,
    badge: rankEntity.badge,
    users: rankEntity.users !== undefined ? rankEntity.users!.map(user => userWire(user)) : undefined,
    permissions: {
      websiteShowStaff: !!rankEntity.scopes!.find(x => x.scope === AUTH_SCOPE.SHOW_STAFF),
      websiteShowAdminPanel: !!rankEntity.scopes!.find(x => x.scope === AUTH_SCOPE.VIEW_ADMIN),
    },
  };
}
