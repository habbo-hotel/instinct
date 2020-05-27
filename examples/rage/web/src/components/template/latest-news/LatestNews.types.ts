import { Article } from 'instinct-rp-interfaces';

export interface LatestNewsState {
  articles: Article[];
  showSpinner: boolean;
}

export const defaultLatestNewsState: LatestNewsState = {
  articles: [],
  showSpinner: true,
};
