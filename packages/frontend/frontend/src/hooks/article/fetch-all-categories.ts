import {createFetchHook} from '../fetch-hook.base';
import {ArticleCategory} from '@instinct-prj/interface';
import {articleService} from '../../services/article';

export const useFetchAllNewsCategories = () =>
  createFetchHook<ArticleCategory[]>(articleService.getAllCategories);
