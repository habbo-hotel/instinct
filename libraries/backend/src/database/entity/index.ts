import {UserForgotPasswordEntity} from './user/forgot-password.entity';

export * from './rank';
export * from './user';
export * from './room';
export * from './photo';
export * from './group';
export * from './article';

import {RoomEntity} from './room';
import {RankEntity} from './rank';
import {UserEntity} from './user';
import {PhotoEntity} from './photo';
import {GroupEntity} from './group';
import {UserBadgesEntity} from './user';
import {Provider} from '@nestjs/common';
import {ArticleCategoryEntity} from './article';
import {UserBansEntity} from './user/bans.entity';
import {ConfigEntity} from './config/config.entity';
import {ConfigRepository} from './config/config.repository';
import {ArticleCategoryRepository, ArticleEntity} from './article';
import {UserForgotPasswordRepository} from './user/forgot-password.repository';

export const databaseEntities: Function[] = [
  ArticleEntity,
  ArticleCategoryEntity,
  PhotoEntity,
  UserForgotPasswordEntity,
  GroupEntity,
  RankEntity,
  UserEntity,
  UserBadgesEntity,
  RoomEntity,
  ConfigEntity,
  UserBansEntity,
];

export const databaseRepositories: Provider[] = [ConfigRepository, UserForgotPasswordRepository, ArticleCategoryRepository];
