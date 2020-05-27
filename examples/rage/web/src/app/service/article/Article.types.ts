import { Article } from 'instinct-rp-interfaces';

export interface ArticleTypes {
  getAll(): Promise<Article[]>;

  getByID(articleID: string): Promise<Article>;
}
