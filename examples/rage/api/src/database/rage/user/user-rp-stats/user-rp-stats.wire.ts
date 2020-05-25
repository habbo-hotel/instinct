import { UserStats} from 'instinct-rp-interfaces';
import { UserRPStatsEntity } from './user-rp-stats.entity';
import { gangWire } from '../../gang/gang/gang.wire';
import { businessPositionWire } from '../../business/business-position/business-position.wire';
import { BusinessPositionEntity } from '../../business/business-position/business-position.entity';

export function userRPStatsWire(userRPStatsEntity: UserRPStatsEntity, businessPosition: BusinessPositionEntity): UserStats {
  return {
    kills: userRPStatsEntity.totalKills,
    deaths: userRPStatsEntity.totalDeaths,
    arrests: userRPStatsEntity.totalArrests,
    health: userRPStatsEntity.currentHealth,
    maxHealth: userRPStatsEntity.maxHealth,
    armor: userRPStatsEntity.armor,
    energy: userRPStatsEntity.energy,
    hunger: userRPStatsEntity.hunger,
    hygiene: userRPStatsEntity.hygiene,
    stamina: userRPStatsEntity.stamina,
    strength: userRPStatsEntity.strength,
    intelligence: userRPStatsEntity.intelligence,
    punches: userRPStatsEntity.totalPunches,
    weed: userRPStatsEntity.weed,
    gang: gangWire(userRPStatsEntity.gang!),
    job: businessPositionWire(businessPosition),
    bankBalance: userRPStatsEntity.bankBalance,
    hasPhone: userRPStatsEntity.hasPhone === 1,
    hasCar: userRPStatsEntity.hasCar === 1,
  }
}