import { Article } from 'fashionkilla-interfaces';

export interface ArticleInterface {
  getAll(): Promise<Article[]>;

  getByID(articleID: string): Promise<Article>;
}
