import { articleService } from 'services';
import { Article } from 'instinct-interfaces';
import { createFetchHook } from '../fetch-hook.base';

export const useFetchAllArticles = () => createFetchHook<Article[]>(articleService.getAll);
