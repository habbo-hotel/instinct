import { Provider } from '@nestjs/common';
import {RoomEntity} from './rage/room/room.entity';
import {RankEntity} from './rage/rank/rank.entity';
import {UserEntity} from './rage/user/user/user.entity';
import {GangEntity } from './rage/gang/gang/gang.entity';
import {RoomRepository} from './rage/room/room.repository';
import {RankRepository} from './rage/rank/rank.repository';
import {ConfigEntity} from './instinct/config/config.entity';
import {UserRepository} from './rage/user/user/user.repository';
import {GangRepository} from './rage/gang/gang/gang.repository';
import {ConfigRepository} from './instinct/config/config.repository';
import {GangRankEntity} from './rage/gang/gang-rank/gang-rank.entity';
import {ArticleEntity} from './instinct/article/article/article.entity';
import {BusinessEntity} from './rage/business/business/business.entity';
import {UserBadgeEntity} from './rage/user/user-badge/user-badge.entity';
import {ServerStatusEntity} from './rage/server-status/server-status.entity';
import {GangRankRepository} from './rage/gang/gang-rank/gang-rank.repository';
import {ArticleRepository} from './instinct/article/article/article.repository';
import {UserRPStatsEntity} from './rage/user/user-rp-stats/user-rp-stats.entity';
import {BusinessJobEntity} from './rage/business/business-job/business-job.entity';
import { ServerStatusRepository } from './rage/server-status/server-status.repository';
import {BusinessJobRepository} from './rage/business/business-job/business-job.repository';
import {ArticleCategoryEntity} from './instinct/article/article-category/article-category.entity';
import {ArticleCategoryRepository} from './instinct/article/article-category/article-category.repository';
import {BusinessJobApplicationEntity} from './rage/business/business-job-application/business-job-application.entity';
import {BusinessJobApplicationRepository} from './rage/business/business-job-application/business-job-application.repository';

export const databaseEntities: Function[] = [
  GangEntity,
  RankEntity,
  RoomEntity,
  UserEntity,
  ConfigEntity,
  ArticleEntity,
  GangRankEntity,
  BusinessEntity,
  UserBadgeEntity,
  UserRPStatsEntity,
  BusinessJobEntity,
  ServerStatusEntity,
  ArticleCategoryEntity,
  BusinessJobApplicationEntity,
];

export const databaseRepositories: Provider[] = [
  RoomRepository,
  RankRepository,
  UserRepository,
  GangRepository,
  ConfigRepository,
  GangRankRepository,
  ArticleRepository,
  BusinessJobRepository,
  ServerStatusRepository,
  ArticleCategoryRepository,
  BusinessJobApplicationRepository
]
