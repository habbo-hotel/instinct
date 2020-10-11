import { backendAPI } from 'api';
import { ArticleTypes } from './';
import { AxiosResponse } from 'axios';
import { Article, ArticleCategory, CreateNewsArticleRequest } from 'instinct-interfaces';

class ArticleService implements ArticleTypes {
  async getAll() {
    const articles: AxiosResponse<Article[]> = await backendAPI.get('articles');
    return articles.data;
  }

  async getByID(articleID: string) {
    const article: AxiosResponse<Article> = await backendAPI.get(`articles/${articleID}`);
    return article.data;
  }

  async create(articleDTO: CreateNewsArticleRequest) {
    const article: AxiosResponse<Article> = await backendAPI.post('articles', { ...articleDTO });
    return article.data;
  }

  async updateByID(articleID: number, articleDTO: CreateNewsArticleRequest) {
    await backendAPI.patch(`articles/${articleID}`, { ...articleDTO });
  }

  async deleteByID(articleID: number) {
    await backendAPI.delete(`articles/${articleID}`);
  }

  async getAllCategories() {
    const categories: AxiosResponse<ArticleCategory[]> = await backendAPI.get('article/categories');
    return categories.data;
  }

  async createCategory(title: string) {
    const newCategory: AxiosResponse<ArticleCategory> = await backendAPI.post('article/categories', { title });
    return newCategory.data;
  }

  async deleteCategoryByID(categoryID: number) {
    await backendAPI.delete(`articles/categories/${categoryID}`);
  }
}

export const articleService: ArticleTypes = new ArticleService();
