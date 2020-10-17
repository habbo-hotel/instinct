import {Article} from '@instinct/interface';
import {createFetchHook} from '../fetch-hook.base';
import {articleService} from '../../services/article';

export const useFetchAllArticles = () =>
  createFetchHook<Article[]>(articleService.getAll);
