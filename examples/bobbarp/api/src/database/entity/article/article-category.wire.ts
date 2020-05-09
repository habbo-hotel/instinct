import {ArticleCategory} from 'instinct-interfaces';
import {ArticleCategoryEntity} from './article-category.entity';

export function articleCategoryWire(articleCategoryEntity: ArticleCategoryEntity): ArticleCategory {
  return {
    id: articleCategoryEntity.id!,
    name: articleCategoryEntity.category,
  };
}
