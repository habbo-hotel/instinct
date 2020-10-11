import { banService } from 'services';
import { UserBan } from 'instinct-interfaces';
import { createFetchHook } from '../fetch-hook.base';

export const useFetchAllBans = () => createFetchHook<UserBan[]>(banService.getAll);
