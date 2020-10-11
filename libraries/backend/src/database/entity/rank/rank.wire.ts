import {userWire} from '../user';
import {RankEntity} from './rank.entity';
import {Rank, RankDTO} from 'instinct-interfaces';
import {booleanToPermissionStatus, PermissionStatus} from './rank.types';

export function rankWire(rankEntity: RankEntity): Rank {
  return {
    id: rankEntity.id!,
    name: rankEntity.name,
    badge: rankEntity.badge,
    users: rankEntity.users !== undefined ? rankEntity.users!.map(user => userWire(user)) : undefined,
    permissions: {
      websiteShowStaff: rankEntity.websiteShowStaff === PermissionStatus.Enabled,
      websiteShowAdminPanel: rankEntity.websiteShowAdminPanel === PermissionStatus.Enabled,
      websiteManageNews: rankEntity.websiteManageNews === PermissionStatus.Enabled,
      websiteManageRanks: rankEntity.websiteManageRanks === PermissionStatus.Enabled,
      websiteManageUsers: rankEntity.websiteManageUsers === PermissionStatus.Enabled,
      websiteManageBans: rankEntity.websiteManageBans === PermissionStatus.Enabled,
    },
  };
}

export function rankDataTransferObjectToEntity(rankDTO: RankDTO): RankEntity {
  return {
    name: rankDTO.name,
    badge: rankDTO.badge,
    level: rankDTO.level,
    websiteManageBans: booleanToPermissionStatus(rankDTO.websiteManageBans),
    websiteManageUsers: booleanToPermissionStatus(rankDTO.websiteManageUsers),
    websiteManageRanks: booleanToPermissionStatus(rankDTO.websiteManageRanks),
    websiteManageNews: booleanToPermissionStatus(rankDTO.websiteManageNews),
    websiteShowStaff: booleanToPermissionStatus(rankDTO.websiteShowStaff),
    websiteShowAdminPanel: booleanToPermissionStatus(rankDTO.websiteShowAdminPanel),
  };
}
