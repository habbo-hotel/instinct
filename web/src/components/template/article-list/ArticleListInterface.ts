import { Article } from 'fashionkilla-interfaces';

export interface ArticleListState {
  articles: Article[];
  showSpinner: boolean;
}

export const defaultArticleListState: ArticleListState = {
  articles: [],
  showSpinner: true,
};
