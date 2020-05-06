export * from './rank';
export * from './user';
export * from './room';
export * from './photo';
export * from './group';
export * from './article';

import { RoomEntity } from './room';
import { RankEntity } from './rank';
import { UserEntity } from './user';
import { PhotoEntity } from './photo';
import { GroupEntity } from './group';
import { UserBadgesEntity } from './user';
import { ArticleEntity } from './article';
import { ArticleCategoryEntity } from './article';

export const databaseEntities: Function[] = [ArticleEntity, ArticleCategoryEntity, PhotoEntity, GroupEntity, RankEntity, UserEntity, UserBadgesEntity, RoomEntity];
