import {Provider} from '@nestjs/common';
import {PhotoEntity, PhotoRepository} from './photo';
import {GroupEntity, GroupRepository} from './group';
import {RankEntity, RankRepository} from './rank';
import {RoomEntity, RoomRepository} from './room';
import {ConfigEntity, ConfigRepository} from './config';
import {BetaCodeEntity, BetaCodeRepository} from './beta-code';
import {UserBanEntity, UserBanRepository} from './user/bans';
import {UserEntity, UserBadgesEntity, UserRepository} from './user/user';
import {EmulatorSettingsEntity, EmulatorSettingsRepository} from './emulator';
import {UserGuestbookEntity, UserGuestbookRepository} from './user/guestbook';
import {
  UserForgotPasswordEntity,
  UserForgotPasswordRepository,
} from './user/forgot-password';
import {
  ArticleCategoryRepository,
  ArticleEntity,
  ArticleCategoryEntity,
  ArticleRepository,
} from './article';

export const databaseEntities: Function[] = [
  RankEntity,
  UserEntity,
  RoomEntity,
  PhotoEntity,
  GroupEntity,
  ConfigEntity,
  UserBanEntity,
  ArticleEntity,
  BetaCodeEntity,
  UserBadgesEntity,
  UserGuestbookEntity,
  ArticleCategoryEntity,
  EmulatorSettingsEntity,
  UserForgotPasswordEntity,
];

export const databaseRepositories: Provider[] = [
  RankRepository,
  UserRepository,
  RoomRepository,
  GroupRepository,
  PhotoRepository,
  ConfigRepository,
  ArticleRepository,
  UserBanRepository,
  BetaCodeRepository,
  UserGuestbookRepository,
  ArticleCategoryRepository,
  EmulatorSettingsRepository,
  UserForgotPasswordRepository,
];
