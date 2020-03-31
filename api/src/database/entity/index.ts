export * from './rank';
export * from './user';
export * from './article';

import { RankEntity } from './rank';
import { UserEntity } from './user';
import { ArticleEntity } from './article';

export const databaseEntities: Function[] = [
  ArticleEntity,
  RankEntity,
  UserEntity,
];
