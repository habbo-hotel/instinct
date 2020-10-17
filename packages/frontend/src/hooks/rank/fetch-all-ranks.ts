import {Rank} from '@instinct/interface';
import {rankService} from '../../services/rank';
import {createFetchHook} from '../fetch-hook.base';

export const useFetchAllRanks = () =>
  createFetchHook<Rank[]>(rankService.getAll);
