import {userService} from '../../services/user';
import {UserRPStats} from '@instinct-prj/interface-rp';
import {createFetchHook} from '@instinct-prj/frontend';

export const useFetchRPStatsByUsername = (username: string) =>
  createFetchHook<UserRPStats>(
    () => userService.getRPStats(username),
    username
  );
