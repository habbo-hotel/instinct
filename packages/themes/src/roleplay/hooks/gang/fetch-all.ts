import {Gang} from '@instinct/interface-rp';
import {gangService} from '../../services/gang';
import {createFetchHook} from '@instinct/frontend';

export const useFetchAllGangs = () =>
  createFetchHook<Gang[]>(gangService.getAll);
