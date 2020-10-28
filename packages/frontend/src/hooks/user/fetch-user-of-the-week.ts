import {User} from '@instinct-prj/interface';
import {userService} from '@instinct-prj/frontend';
import {createFetchHook} from '../fetch-hook.base';

export const useFetchUserOfTheWeek = () =>
  createFetchHook<User[]>(userService.getUserOfTheWeek);
