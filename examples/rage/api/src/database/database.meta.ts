import { RoomEntity } from './rage/room';
import { RankEntity } from './rage/rank';
import { GangEntity } from './rage/gang/gang';
import { UserEntity } from './rage/user/user';
import { ConfigEntity } from './instinct/config';
import { GangRankEntity } from './rage/gang/gang-rank';
import { BusinessEntity } from './rage/business/business';
import { ServerStatusEntity } from './rage/server-status';
import { UserBadgeEntity } from './rage/user/user-badge';
import { ArticleEntity } from './instinct/article/article';
import { UserRPStatsEntity } from './rage/user/user-rp-stats';
import { BusinessJobEntity } from './rage/business/business-job';
import { ArticleCategoryEntity } from './instinct/article/article-category';
import { BusinessJobApplicationEntity } from './rage/business/business-job-application';

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
]