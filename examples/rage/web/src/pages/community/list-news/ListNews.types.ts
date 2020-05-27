import { Article } from 'instinct-rp-interfaces';

export interface ListNewsState {
  articles: Article[];
  showSpinner: boolean;
}

export const defaultListNewsState: ListNewsState = {
  articles: [],
  showSpinner: true,
}