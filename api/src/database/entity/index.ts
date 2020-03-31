export * from './rank';
export * from './user';
export * from './photo';
export * from './article';

import { RankEntity } from './rank';
import { UserEntity } from './user';
import { PhotoEntity } from './photo';
import { ArticleEntity } from './article';

export const databaseEntities: Function[] = [
  ArticleEntity,
  PhotoEntity,
  RankEntity,
  UserEntity,
];
