import { Article } from 'instinct-rp-interfaces';

export interface ViewArticleState {
  article?: Article;
  showSpinner: boolean;
}

export const defaultViewArticleState: ViewArticleState = {
  article: undefined,
  showSpinner: true,
};
