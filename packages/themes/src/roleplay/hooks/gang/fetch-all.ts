import {Gang} from '@instinct-prj/interface-rp';
import {gangService} from '../../services/gang';
import {createFetchHook} from '@instinct-prj/frontend';

export const useFetchAllGangs = () =>
  createFetchHook<Gang[]>(gangService.getAll);
