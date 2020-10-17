import {
  Article,
  ArticleCategory,
  CreateNewsArticleRequest,
} from '@instinct/interface';

export interface ArticleTypes {
  getAll(): Promise<Article[]>;

  getByID(articleID: string): Promise<Article>;

  create(articleDTO: CreateNewsArticleRequest): Promise<Article>;

  updateByID(
    articleID: number,
    articleDTO: CreateNewsArticleRequest
  ): Promise<void>;

  deleteByID(articleID: number): Promise<void>;

  getAllCategories(): Promise<ArticleCategory[]>;

  createCategory(title: string): Promise<ArticleCategory>;

  deleteCategoryByID(categoryID: number): Promise<void>;
}
