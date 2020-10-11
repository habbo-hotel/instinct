import { articleService } from 'services';
import { createFetchHook } from '../fetch-hook.base';
import { ArticleCategory } from 'instinct-interfaces';

export const useFetchAllNewsCategories = () => createFetchHook<ArticleCategory[]>(articleService.getAllCategories);
