import {getRepository} from 'typeorm';
import {ArticleCategoryEntity} from './article-category.entity';

export async function articleCategoryFactory(changes?: Partial<ArticleCategoryEntity>): Promise<ArticleCategoryEntity> {
  return getRepository(ArticleCategoryEntity).save({
    id: undefined,
    category: 'Test Category',
    ...changes,
  })
}