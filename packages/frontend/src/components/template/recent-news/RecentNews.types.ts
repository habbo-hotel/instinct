import {Article} from '@instinct/interface';

export interface RecentNewsState {
  articles: Article[];
  isLoading: boolean;
}

export const defaultRecentNewsState: RecentNewsState = {
  articles: [],
  isLoading: true,
};
