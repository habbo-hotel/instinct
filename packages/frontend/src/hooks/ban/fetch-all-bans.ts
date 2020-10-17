import {UserBan} from '@instinct/interface';
import {banService} from '../../services/ban';
import {createFetchHook} from '../fetch-hook.base';

export const useFetchAllBans = () =>
  createFetchHook<UserBan[]>(banService.getAll);
