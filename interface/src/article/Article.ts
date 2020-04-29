import { exampleUser, User } from '../';
import { ArticleCategory, exampleArticleCategory } from './';

export interface Article {
  id: number;
  title: string;
  description: string;
  content: string;
  datePosted: number;
  imagePath: string;
  author: User;
  category: ArticleCategory;
}

export const exampleArticle: Article = {
  id: 1,
  title: 'Test Article',
  description: 'Testing the news',
  content: 'I am testing the news',
  datePosted: +new Date() / 1000,
  imagePath: '/img/article-1.png',
  author: exampleUser,
  category: exampleArticleCategory,
};
