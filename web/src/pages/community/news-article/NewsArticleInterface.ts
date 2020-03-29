import { Article } from 'fashionkilla-interfaces';

export interface NewsArticleParameters {
  articleID: string;
}

export interface NewsArticleState {
  article?: Article;
  showSpinner: boolean;
}

export const defaultNewsArticleState: NewsArticleState = {
  article: undefined,
  showSpinner: true,
};
