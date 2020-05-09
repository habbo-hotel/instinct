import { ConfigEntity } from './config';

export * from './rank';
export * from './user';
export * from './gang';
export * from './room';
export * from './config';
export * from './article';
export * from './business';

import {RoomEntity} from './room';
import {RankEntity} from './rank';
import {UserEntity} from './user';
import {GangEntity} from './gang';
import {BadgeEntity} from './badge';
import {UserBadgesEntity} from './user';
import {ArticleEntity} from './article';
import {ArticleCategoryEntity} from './article';
import {BusinessEntity, BusinessJobEntity} from './business';
import { BusinessJobApplicationEntity, BusinessMemberEntity } from './business';

export const databaseEntities: Function[] = [
  ArticleEntity,
  BadgeEntity,
  GangEntity,
  ConfigEntity,
  ArticleCategoryEntity,
  BusinessEntity,
  RankEntity,
  UserEntity,
  UserBadgesEntity,
  RoomEntity,
  BusinessMemberEntity,
  BusinessJobEntity,
  BusinessJobApplicationEntity,
];
