import { Article } from 'instinct-interfaces';

export interface ArticleTypes {
  getAll(): Promise<Article[]>;

  getByID(articleID: string): Promise<Article>;
}
