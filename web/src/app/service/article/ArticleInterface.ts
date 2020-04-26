import { Article } from 'instinct-interfaces';

export interface ArticleInterface {
  getAll(): Promise<Article[]>;

  getByID(articleID: string): Promise<Article>;
}
