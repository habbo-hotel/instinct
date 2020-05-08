import {userWire} from '../user';
import {Article} from 'instinct-interfaces';
import {ArticleEntity} from './article.entity';
import {articleCategoryWire} from './article-category.wire';

export function articleWire(articleEntity: ArticleEntity): Article {
  return {
    id: articleEntity.id!,
    title: articleEntity.title,
    headerImage: articleEntity.header,
    thumbnailImage: articleEntity.image,
    datePosted: articleEntity.timestamp,
    description: articleEntity.shortStory,
    content: articleEntity.fullStory,
    author: userWire(articleEntity.author!),
    category: articleCategoryWire(articleEntity.category!),
  };
}
