import { rankService } from 'services';
import { Rank } from 'instinct-interfaces';
import { createFetchHook } from '../fetch-hook.base';

export const useFetchStaffTeam = () => createFetchHook<Rank[]>(rankService.getStaff);
