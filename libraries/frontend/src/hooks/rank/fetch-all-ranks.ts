import { rankService } from 'services';
import { Rank } from 'instinct-interfaces';
import { createFetchHook } from '../fetch-hook.base';

export const useFetchAllRanks = () => createFetchHook<Rank[]>(rankService.getAll);
