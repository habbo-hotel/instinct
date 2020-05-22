import * as Moment from 'moment';
import {getRepository} from 'typeorm';
import {ArticleEntity} from './article.entity';
import {UserEntity} from '../../../rage/user/user/user.entity';
import {userFactory} from '../../../rage/user/user/user.factory';
import {ArticleCategoryEntity} from '../article-category/article-category.entity';
import {articleCategoryFactory} from '../article-category/article-category.factory';

export async function articleFactory(changes?: Partial<ArticleEntity>): Promise<ArticleEntity> {
  const author: UserEntity = changes?.author ?? (await userFactory());
  const category: ArticleCategoryEntity = changes?.category ?? (await articleCategoryFactory());

  return getRepository(ArticleEntity).save({
    id: undefined,
    category,
    title: 'Test Article',
    shortStory: 'This is just a test',
    fullStory: 'We are testing our articles',
    header: '1.png',
    image: '1.png',
    timestamp: Moment().unix(),
    ...changes,
  });
}
