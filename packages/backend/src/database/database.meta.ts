import {PhotoEntity} from './photo';
import {GroupEntity} from './group';
import {Provider} from '@nestjs/common';
import {RankEntity, RankRepository} from './rank';
import {RoomEntity, RoomRepository} from './room';
import {ConfigEntity, ConfigRepository} from './config';
import {
  ArticleCategoryRepository,
  ArticleEntity,
  ArticleCategoryEntity,
  ArticleRepository,
} from './article';
import {
  UserBadgesEntity,
  UserForgotPasswordEntity,
  UserForgotPasswordRepository,
  UserBanEntity,
  UserBanRepository,
  UserEntity,
  UserRepository,
} from './user';

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
  UserBanEntity,
];

export const databaseRepositories: Provider[] = [
  ConfigRepository,
  UserForgotPasswordRepository,
  ArticleRepository,
  ArticleCategoryRepository,
  RankRepository,
  UserBanRepository,
  UserRepository,
  RoomRepository,
];
