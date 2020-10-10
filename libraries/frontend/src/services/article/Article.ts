import { backendAPI } from 'api';
import { ArticleTypes } from './';
import { AxiosResponse } from 'axios';
import { Article, CreateNewsArticleRequest } from 'instinct-interfaces';

class ArticleService implements ArticleTypes {
  async getAll() {
    const articles: AxiosResponse<Article[]> = await backendAPI.get('articles');
    return articles.data;
  }

  async getByID(articleID: string) {
    const article: AxiosResponse<Article> = await backendAPI.get(`articles/${articleID}`);
    return article.data;
  }

  async create(articleDTO: CreateNewsArticleRequest): Promise<Article> {
    const article: AxiosResponse<Article> = await backendAPI.post('articles', { ...articleDTO });
    return article.data;
  }
}

export const articleService: ArticleTypes = new ArticleService();
