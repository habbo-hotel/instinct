import { Article, CreateNewsArticleRequest } from 'instinct-interfaces';

export interface ArticleTypes {
  getAll(): Promise<Article[]>;

  getByID(articleID: string): Promise<Article>;

  create(articleDTO: CreateNewsArticleRequest): Promise<Article>;
}
