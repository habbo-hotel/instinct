import {Article} from './Article';

export interface ArticleCategory {
  id: number;
  name: string;
  articles?: Article[];
}
export const exampleArticleCategory: ArticleCategory = {
  id: 1,
  name: 'Announcements',
};
