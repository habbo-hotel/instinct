import { Rank } from './Rank';
import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class RankDTO {
  @IsString()
  @IsNotEmpty()
  name!: string;

  @IsString()
  @IsNotEmpty()
  badge!: string;

  @IsNumber()
  level!: number;

  @IsNumber({}, { each: true })
  users!: number[];

  @IsBoolean()
  websiteShowStaff!: boolean;

  @IsBoolean()
  websiteShowAdminPanel!: boolean;

  @IsBoolean()
  websiteManageNews!: boolean;

  @IsBoolean()
  websiteManageRanks!: boolean;

  @IsBoolean()
  websiteManageUsers!: boolean;

  @IsBoolean()
  websiteManageBans!: boolean;
}

export function rankWireToRankDTO(rankWire: Rank): RankDTO {
  return {
    name: rankWire.name,
    badge: rankWire.badge,
    level: 1,
    users: rankWire.users!.map((_) => _.id),
    websiteShowStaff: rankWire.permissions.websiteShowStaff,
    websiteShowAdminPanel: rankWire.permissions.websiteShowAdminPanel,
    websiteManageBans: rankWire.permissions.websiteManageBans,
    websiteManageNews: rankWire.permissions.websiteManageNews,
    websiteManageUsers: rankWire.permissions.websiteManageUsers,
    websiteManageRanks: rankWire.permissions.websiteManageRanks,
  };
}
