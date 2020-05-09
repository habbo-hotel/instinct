export * from './rank';
export * from './user';
export * from './room';
export * from './group';
export * from './article';

import {RoomEntity} from './room';
import {RankEntity} from './rank';
import {UserEntity} from './user';
import {GroupEntity} from './group';
import {BadgeEntity} from './badge';
import {UserBadgesEntity} from './user';
import {ArticleEntity} from './article';
import {GroupMemberEntity} from './group';
import {ArticleCategoryEntity} from './article';

export const databaseEntities: Function[] = [
  ArticleEntity,
  BadgeEntity,
  ArticleCategoryEntity,
  GroupEntity,
  RankEntity,
  UserEntity,
  UserBadgesEntity,
  RoomEntity,
  GroupMemberEntity,
];
