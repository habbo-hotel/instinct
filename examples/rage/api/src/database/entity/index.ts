import { ConfigEntity } from './config';

export * from './rank';
export * from './user';
export * from './gang';
export * from './room';
export * from './config';
export * from './article';
export * from './business';
export * from './server-status';

import {RoomEntity} from './room';
import {RankEntity} from './rank';
import {BadgeEntity} from './badge';
import {UserBadgesEntity} from './user';
import {ArticleEntity} from './article';
import {ArticleCategoryEntity} from './article';
import { ServerStatusEntity } from './server-status';
import { GangEntity, GangRanksEntity } from './gang';
import { UserEntity, UserRPStatsEntity } from './user';
import { BusinessEntity, BusinessJobEntity, BusinessJobApplicationEntity } from './business';

export const databaseEntities: Function[] = [
  GangEntity,
  RankEntity,
  UserEntity,
  RoomEntity,
  BadgeEntity,
  ConfigEntity,
  ArticleEntity,
  BusinessEntity,
  GangRanksEntity,
  UserBadgesEntity,
  UserRPStatsEntity,
  BusinessJobEntity,
  ServerStatusEntity,
  ArticleCategoryEntity,
  BusinessJobApplicationEntity,
];
