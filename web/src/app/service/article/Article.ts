import { ArticleInterface } from './';
import { AxiosResponse } from 'axios';
import { backendAPI } from '../../BackendAPI';
import { Article } from 'fashionkilla-interfaces';

class ArticleService implements ArticleInterface {
  async getAll() {
    const articles: AxiosResponse<Article[]> = await backendAPI.get('articles');
    return articles.data;
  }

  async getByID(articleID: string) {
    const article: AxiosResponse<Article> = await backendAPI.get(`articles/${articleID}`);
    return article.data;
  }
}

export const articleService: ArticleInterface = new ArticleService();
