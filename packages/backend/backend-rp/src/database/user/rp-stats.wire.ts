import {UserRPStatEntity} from './rp-stats.entity';
import {UserRPStats} from '@instinct-prj/interface-rp';

export function rpStatsWire(entity: UserRPStatEntity): UserRPStats {
  return {
    health: {
      current: entity.currentHealth,
      maximum: entity.maxHealth,
    },
    energy: {
      current: entity.currentEnergy,
      maximum: entity.maxEnergy,
    },
    job: entity.business && {
      businessID: entity.businessID,
      positionID: entity.businessPositionID,
      businessName: entity.business!.name,
      positionName: entity.businessPosition!.name,
      businessBadge: entity.business!.badge,
      permissions: {
        manager: entity.businessPosition!.isManager === 1,
        canHire: entity.businessPosition!.canHire === 1,
        canFire: entity.businessPosition!.canFire === 1,
        canPromote: entity.businessPosition!.canPromote === 1,
        canDemote: entity.businessPosition!.canDemote === 1,
      },
    },
    gang: entity.gang && {
      gangID: entity.gangID,
      rankID: entity.gangRankID,
      gangName: entity.gang!.name,
      rankName: entity.gangRank!.name,
      gangBadge: entity.gang!.emblem,
      permissions: {
        canHire: entity.gangRank!.canHire === 1,
        canFire: entity.gangRank!.canFire === 1,
        canPromote: entity.gangRank!.canPromote === 1,
        canDemote: entity.gangRank!.canDemote === 1,
      },
    },
  };
}
