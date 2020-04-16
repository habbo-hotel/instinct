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
import { ArticleEntity } from './article';

export const databaseEntities: Function[] = [ArticleEntity, PhotoEntity, GroupEntity, RankEntity, UserEntity, RoomEntity];
